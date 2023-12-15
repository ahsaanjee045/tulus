import React, { useContext, useEffect } from "react";
import SignUp from "./pages/auth/Singup";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import { Button, CssBaseline } from "@mui/material";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BaseLayout from "./layouts/BaseLayout";
import Products from "./pages/Products";
import DashboardLayout from "./layouts/DashboardLayout";
import AddProduct from "./pages/AdminDashboard/AddProduct";
import ProductPanel from "./pages/AdminDashboard/ProductPanel";
import AddCategory from "./pages/AdminDashboard/AddCategory";
import Orders from "./pages/AdminDashboard/Orders";
import ProductsByGender from "./pages/ProductsByGender";
import SingleProductPage from "./pages/SingleProductPage";
import { getAllProduct } from "./slices/productSlice";
import { useDispatch } from "react-redux";
import { getAllCategories } from "./slices/categorySlice";
import { getAllCartProducts } from "./slices/cartSlice";
import { FirebaseContext } from "./context/FirebaseContextProvider";

const App = () => {
    const dispatch = useDispatch();
    const { userState } = useContext(FirebaseContext);
    useEffect(() => {
        dispatch(getAllProduct());
        dispatch(getAllCategories());
    }, []);

    useEffect(() => {
        userState && dispatch(getAllCartProducts(userState.uid));
    }, [userState]);

    return (
        <div>
            <CssBaseline />
            {/* <Header/> */}
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/products" element={<Products />} />
                    <Route
                        path="/products/:gender"
                        element={<ProductsByGender />}
                    />
                    <Route
                        path="/product/:id"
                        element={<SingleProductPage />}
                    />
                    <Route path="/admin" element={<DashboardLayout />}>
                        <Route index element={<AddProduct />} />
                        <Route path="addProduct" element={<AddProduct />} />
                        <Route path="products" element={<ProductPanel />} />
                        <Route path="addCategory" element={<AddCategory />} />
                        <Route path="orders" element={<Orders />} />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {/* <Footer/> */}
        </div>
    );
};

export default App;

// products
// user
// cart

// view/compononet -> dispatchs a action -> reducers -> store -> view/compononet
