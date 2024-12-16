//This slice stores the sub route under the browse route. This will solve the issue of browse main route changing when its sub routes are clicked.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subMenuRoute: '/by-course/main-course',
}

const browseSubMenuRouteSlice = createSlice({
    name: 'browseSubMenuRoute',
    initialState,
    reducers: {
        subMenuRouteChange: (state, action) => {
            state.subMenuRoute = action.payload
        }
    }
})

export default browseSubMenuRouteSlice.reducer;
export const browseSubMenuRouteActions = browseSubMenuRouteSlice.actions