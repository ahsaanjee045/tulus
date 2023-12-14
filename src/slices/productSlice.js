import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    setDoc,
} from "firebase/firestore";
import app from "../firebase/firebase.config";
import { uploadImage } from "../utils/utils";

const database = getFirestore(app);

// redux-thunk

export const createProduct = createAsyncThunk(
    "products/createProduct",
    async ({
        productName,
        category,
        gender,
        price,
        brand,
        inStock,
        description,
        image,
    }) => {
        try {
            let url = await uploadImage(image);

            let productData = {
                productName,
                category,
                gender,
                price,
                brand,
                inStock,
                description,
                image: url,
            };
            let docRef = doc(collection(database, "products"));
            let res = await setDoc(docRef, productData);
            console.log("RESPONSE AFTER CREATING PRODUCT", res);
            return true;
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
);

export const getAllProduct = createAsyncThunk(
    "products/getAllProduct",
    async () => {
        try {
            let docRef = collection(database, "products");
            let result = await getDocs(docRef);
            let products = result.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return products;
        } catch (error) {
            console.log("ERROR WHILE GETTING ALL PRODUCTS", error);
            throw new Error(error.message);
        }
    }
);

export const getSingleProduct = createAsyncThunk(
    "products/getSingleProduct",
    async (id) => {
        try {
            let docRef = doc(database, "products", id);
            let result = await getDoc(docRef);
            return result.data();
        } catch (error) {
            console.log("ERROR WHILE GETTING SINGLE PRODUCTS", error);
            throw new Error(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
        product: null,
    },
    // purely synchronous
    reducers: {
        // actions
    },
    extraReducers: (builder) => {
        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            alert("Product Created Successfully");
            // state.products = action.payload;
        });
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(getAllProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(getAllProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(getSingleProduct.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.product = action.payload;
        });
        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export default productSlice.reducer;
