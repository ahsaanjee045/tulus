import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import categorySlice from "../slices/categorySlice";
import cartSlice from "../slices/cartSlice";

const store = configureStore({
    reducer: {
        //
        productState: productSlice,
        categoryState: categorySlice,
        cartState : cartSlice
    },
});

export default store;
