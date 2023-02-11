import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../action";

const propertyListSlice = createSlice({
    name: 'propertyList',
    initialState: {
        currentFilters: [],
        data: [],
        isLoading: false,
        hasError: false,
    },

    reducers: {
        propertyListReceived: (state, action) => {
            const data = action.payload?.hits
            state.data = data.map(property => {
                const {price, title, externalID, rooms, baths, area, isVerified} = property
                const coverPhoto = property?.coverPhoto?.url
                const agencyLogo = property?.agency?.logo?.url
                return{price, title, externalID, rooms, baths ,area, isVerified, coverPhoto, agencyLogo}
            })
        },

        changeFilterValue: (state, action) =>{
            const {index, value: queryValue} = action.payload
            state.currentFilters[index].queryValue = queryValue
        },

        setPropertyListLoading: (state, action) => {
            state.isLoading = action.payload
        },

        setPropertyListError: (state, action) => {
            state.hasError = action.payload
        },

        setCurrentFilters: (state, action) => {
            state.currentFilters = action.payload
        }
    }
})

export const {changeFilterValue } = propertyListSlice.actions

export const loadPropertyList = () => (dispatch, getState) => {
    const url = '/properties/list'
    const { currentFilters } = getState().propertyList
    const urlParam = createUrlParamFromFilters(currentFilters)

    return dispatch(apiCallBegan({
        url: url+urlParam,
        onSuccess: propertyListSlice.actions.propertyListReceived.type,
        onError: propertyListSlice.actions.setPropertyListError.type,
        onLoading: propertyListSlice.actions.setPropertyListLoading.type,
    }))
}


function createUrlParamFromFilters(filters) {
    let paramUrl = '?'
    filters.forEach(({ queryName, queryValue }) => {
        if (queryValue)  paramUrl += `${queryName}=${queryValue}&`
    })
    return paramUrl
}


export const setIntialFilters = (filtersData) => (dispatch) =>{
    const initialFilters = filtersData.map(({ queryName }) => {
        if(queryName === 'purpose')return ({queryName, queryValue: 'for-sale'})
        return {
            queryName,
            queryValue: null
        }
    })

    initialFilters.push({
        queryName: "locationExternalIDs",
        queryValue: 5002
    })
    return dispatch(propertyListSlice.actions.setCurrentFilters(initialFilters))
}

export default propertyListSlice.reducer