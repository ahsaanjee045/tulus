import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FirebaseContextProvider from "./context/FirebaseContextProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FirebaseContextProvider>
                <Provider store={store}>
                    <App />
                </Provider>
            </FirebaseContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
