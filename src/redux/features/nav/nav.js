import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isNavOpen: false,
};

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        updateIsNavOpen: (state) => {
            state.isNavOpen = !(state.isNavOpen);
        },
        closeNav: (state) => {
            state.isNavOpen = false
        }
    }
});


export default navSlice.reducer;
export const {updateIsNavOpen, closeNav} = navSlice.actions;