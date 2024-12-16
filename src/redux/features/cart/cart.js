// This slice stores data regarding products
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productsInCart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateProductsInCart: (state, action) => {
            state.productsInCart = action.payload
        }
    }
});

export default cartSlice.reducer;
export const {updateProductsInCart} = cartSlice.actions;
