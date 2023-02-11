import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../action";

const propertyDetailsSlice = createSlice({
    name: 'propertyDetails',
    initialState: {
        data: {
            imageUrls: [],
            facilities: [],
            area: 0
        },
        isLoading: false,
        hasError: false,
    },

    reducers: {
        propertyDetailsReceived: (state, action) => {
            const data = action.payload
            const { price, description, rooms, baths, area, title, isVerified} = data
            const imageUrls = data?.photos?.map(photo => photo?.url)
            const facilities = data?.amenities?.[0]?.amenities?.map(feature => feature.text)
            const agencyLogo = data?.agency?.logo?.url
            state.data = { price, description, rooms, baths, area, title, isVerified, imageUrls, facilities, agencyLogo }
        },

        propertyDetailsLoading: (state, action) => {
            state.isLoading = action.payload
        },

        propertyDetailsError: (state, action) => {
            state.hasError = action.payload
        },
    }
})


export const loadPropertyDetails = (externalId) => (dispatch) => {
    const url = `/properties/detail?externalID=${externalId}`
    return dispatch(apiCallBegan({
        url: url,
        onSuccess: propertyDetailsSlice.actions.propertyDetailsReceived.type,
        onError: propertyDetailsSlice.actions.propertyDetailsError.type,
        onLoading: propertyDetailsSlice.actions.propertyDetailsLoading.type,
    }))
}

export default propertyDetailsSlice.reducer