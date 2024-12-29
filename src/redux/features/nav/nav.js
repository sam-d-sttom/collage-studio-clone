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
        updateIsNavOpenIfCartOpen: (state) => {
            state.isNavOpen = false
        }
    }
});


export default navSlice.reducer;
export const {updateIsNavOpen, updateIsNavOpenIfCartOpen} = navSlice.actions;