import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    collection,
    doc,
    getDocs,
    getFirestore,
    setDoc,
} from "firebase/firestore";
import app from "../firebase/firebase.config";

const database = getFirestore(app);

export const getAllCategories = createAsyncThunk(
    "category/getAllCategories",
    async () => {
        try {
            let docRef = collection(database, "categories");
            let result = await getDocs(docRef);
            let categories = result.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            return categories;
        } catch (error) {
            console.log("ERROR WHILE GETTING ALL CATEGORY", error);
            throw new Error(error.message);
        }
    }
);

export const addCategory = createAsyncThunk(
    "category/addCategory",
    async (categoryName) => {
        try {
            let docRef = doc(collection(database, "categories"));
            await setDoc(docRef, {
                categoryName,
            });

            return true;
        } catch (error) {
            console.log("ERROR WHILE ADDING CATEGORY", error);
            throw new Error(error.message);
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addCategory.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(addCategory.fulfilled, (state, action) => {
            state.loading = false;
            alert("New Category added");
        });
        builder.addCase(addCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    },
});

export default categorySlice.reducer;
