// This slice stores data regarding products
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productsInCart: [],
    numberOfProductsInCart: 0,
    isCartOpen: false,
    subTotal: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateProductsInCart: (state, action) => {
            state.productsInCart.push(action.payload);
            state.subTotal += action.payload.price;
            state.numberOfProductsInCart++;
        },
        updateQuantityOfAProductInCart: (state, action) => {
            const sku = action.payload.sku;
            const operation = action.payload.operation;

            const productList = state.productsInCart;

            for(let i = 0; i < productList.length; i++){
                if(productList[i].sku === sku){
                    if(operation === 'increment'){
                        productList[i].quantity = productList[i].quantity + 1;
                        productList[i].cost = productList[i].quantity * productList[i].price;
                        state.subTotal += productList[i].price;
                        state.numberOfProductsInCart++;
                    }else if(operation === 'decrement'){
                        if(productList[i].quantity === 1){
                            state.subTotal -= productList[i].cost;
                            productList.splice(i, 1);
                            state.numberOfProductsInCart--;
                        }else{
                            productList[i].quantity = productList[i].quantity - 1;
                            productList[i].cost = productList[i].quantity * productList[i].price;
                            state.subTotal -= productList[i].price;
                            state.numberOfProductsInCart--;
                        }
                        
                    }else if(operation === 'remove'){
                        state.numberOfProductsInCart = state.numberOfProductsInCart - productList[i].quantity
                        state.subTotal -= productList[i].cost;
                        productList.splice(i, 1);
                    }
                    break;
                }
            }
        },
        updateNumberOfProductsInCart: (state ) => {
            
        },
        updateIsCartOpen: (state) => {
            state.isCartOpen = !(state.isCartOpen);
        },
        updateSubTotal: (state, action) => {
            state.subTotal = state.subTotal + action
        }
    }
});

export default cartSlice.reducer;
export const {updateProductsInCart, updateQuantityOfAProductInCart, updateNumberOfProductsInCart, updateIsCartOpen} = cartSlice.actions;
