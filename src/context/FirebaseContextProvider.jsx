import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const FirebaseContext = createContext();

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const FirebaseContextProvider = ({ children }) => {
    const [userState, setUserState] = useState(null);

    const signupWithEmailAndPassword = async ({ email, password }) => {
        try {
            let user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("After Signing in the user", user);

            return true;
        } catch (error) {
            console.log("SING UP FAILED", error);
            return null;
        }
    };

    const loginWithEmailAndPassword = async ({ email, password }) => {
        try {
            let user = await signInWithEmailAndPassword(auth, email, password);
            console.log("After logging in the user", user);
            return true;
        } catch (error) {
            console.log("LOGIN IN FAILED", error);
            return null;
        }
    };

    const logoutUser = async () => {
        try {
            let res = await signOut(auth);
            console.log("LOGGED OUT SUCCESSFUL");
            return true;
        } catch (error) {
            console.log("LOGOUT IN FAILED", error);
            return null;
        }
    };

    const signinWithGoogle = async () => {
        try {
            let res = await signInWithPopup(auth, provider);
            console.log("LOGIN WITH GOOGLE WITH SUCCESSFUL", res.user);
            return true;
        } catch (error) {
            console.log("LOGGIN WITH GOOGLE FAILED", error);
            return null;
        }
    };

    useEffect(() => {
        let unSub = onAuthStateChanged(auth, (user) => {
            if (user) {
                // console.log("Auth state changed", user);
                setUserState(user);
            } else {
                console.log("No User logged in right now");
                setUserState(null);
            }
        });

        // clean up function -> unmounting
        return () => {
            unSub();
        };
    }, []);

    return (
        <FirebaseContext.Provider
            value={{
                signupWithEmailAndPassword,
                loginWithEmailAndPassword,
                userState,
                logoutUser,
                signinWithGoogle,
            }}
        >
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContextProvider;
