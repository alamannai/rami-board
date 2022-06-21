import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './features/Cart/cartSlice' ;
import ngReducer from './features/Cart/ngSlice' ;

export const store = configureStore({
    reducer: {
        cart:cartReducer,
        ng:ngReducer,
    },
});