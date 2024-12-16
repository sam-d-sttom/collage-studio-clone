//This slice store all information about the user and if a user is logged in.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userLoggedIn: true,
    userName: '',
    userEmail: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserLoggedInState: (state, action) => {
            state.userLoggedIn = action.payload;
        },

        setUserNameAndEmail: (state, action) => {
            state.userName = action.payload.username;
            state.userEmail = action.payload.email;
        }
    }
});


export default userSlice.reducer;
export const {updateUserLoggedInState, setUserNameAndEmail} = userSlice.actions;