import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    getDoc,
    query,
    where,
    getDocs,
    updateDoc,
} from "firebase/firestore";
import app from "../firebase/firebase.config";

const database = getFirestore(app);

export const addProductToCart = createAsyncThunk(
    "cart/addProductToCart",
    async ({ productName, productId, price, userId, qty }) => {
        try {
            let productData = {
                productName,
                productId,
                price,
                userId,
                qty,
            };
            let col = collection(database, "cart");
            let q = query(col, where("productId", "==", productId));
            let existingProduct = await getDocs(q);
            let existPr;

            if (existingProduct.docs.length > 0) {
                existPr = {
                    ...existingProduct.docs[0].data(),
                    id: existingProduct.docs[0].id,
                };
                console.log(existPr);
            }

            if (existPr) {
                let d = doc(database, "cart", existPr.id);
                await updateDoc(d, {
                    qty: qty,
                });
                return true;
            } else {
                let docRef = doc(collection(database, "cart"));
                let res = await setDoc(docRef, productData);
                console.log("RESPONSE AFTER CREATING PRODUCT", res);
                return true;
            }
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
);

export const getAllCartProducts = createAsyncThunk(
    "cart/getAllCartProducts",
    async (userId) => {
        try {
            let col = collection(database, "cart");
            let q = query(col, where("userId", "==", userId));
            let cartItems = await getDocs(q);
            // console.log(cartItems)
            if (cartItems.docs.length > 0) {
                return cartItems.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }));
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addProductToCart.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            alert("Product Added to cart successfully");
        });
        builder.addCase(addProductToCart.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(getAllCartProducts.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllCartProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.cartItems = action.payload;
        });
        builder.addCase(getAllCartProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export default cartSlice.reducer;
