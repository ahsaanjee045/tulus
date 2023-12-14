import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../slices/productSlice";
import categorySlice from "../slices/categorySlice";

const store = configureStore({
    reducer: {
        //
        productState: productSlice,
        categoryState: categorySlice,
    },
});

export default store;
