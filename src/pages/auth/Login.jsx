import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FirebaseContext } from "../../context/FirebaseContextProvider";
import { Link, Navigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <MuiLink color="inherit" href="https://mui.com/">
                Your Website
            </MuiLink>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
    const { loginWithEmailAndPassword, userState, signinWithGoogle } =
        useContext(FirebaseContext);

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let result = await loginWithEmailAndPassword(loginData);
            alert("Successfully Logged in up");
            setLoginData({
                email: "",
                password: "",
            });
        } catch (error) {
            console.log("IN LOGIN PAGE COMPONENT", error);
        }
    };

    if (userState) {
        return <Navigate to={"/"} />;
    }

    // console.log(loginData)

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "black" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h5"
                        mt={2}
                        fontWeight={"700"}
                    >
                        Log in to Your Account
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleLogin}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={loginData.email}
                                    onChange={(e) =>
                                        setLoginData({
                                            ...loginData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={loginData.password}
                                    onChange={(e) =>
                                        setLoginData({
                                            ...loginData,
                                            password: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                borderRadius: "0",
                                bgcolor: "black",
                                ":hover": {
                                    backgroundColor: "#232222de",
                                },
                            }}
                        >
                            Sign in
                        </Button>

                        <Grid container justifyContent={"center"}>
                            <Grid item>OR</Grid>
                        </Grid>
                        <Button
                            onClick={signinWithGoogle}
                            type="button"
                            fullWidth
                            variant="contained"
                            sx={{
                                py : "15px",
                                mt: 3,
                                mb: 2,
                                borderRadius: "0",
                                bgcolor: "black",
                                ":hover": {
                                    backgroundColor: "#232222de",
                                },
                            }}
                        >
                            <GoogleIcon
                                sx={{
                                    // marginLeft
                                    mr: "8px",
                                }}
                            />{" "}
                            Continue With Google
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <MuiLink
                                    component={Link}
                                    to="/signup"
                                    variant="body2"
                                >
                                    Don't have an account? Sign up
                                </MuiLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
