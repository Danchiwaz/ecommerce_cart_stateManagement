import { configureStore } from "@reduxjs/toolkit";
import cartReducer from  "./features/cart/cartSlice"

export const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
});



// notes
// the store acts the overall state of the application 