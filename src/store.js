import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./features/cart/cartSlice"
import modalReducer from "./features/modal/modalSlice"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        modal: modalReducer
    }
});



// notes
// the store acts the overall state of the application 