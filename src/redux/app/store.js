import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cart";
import navReducer from "../features/nav/nav";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        nav: navReducer,
    },
})

export default store;