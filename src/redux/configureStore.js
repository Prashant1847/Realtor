import { configureStore} from "@reduxjs/toolkit";

import propertyListReducer from "./slices/propertyListSlice";
import propertyDetailsReducers from "./slices/propertyDetailsSlice";
import { apiMiddleware } from "./apiMiddleware";

export const store = configureStore({
    reducer: {
        propertyList: propertyListReducer,
        propertyDetails: propertyDetailsReducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
})