import { useState, useContext } from "react";
import { Avatar, Button, Link as MuiLink } from "@mui/material";
// import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import MuiLink  from "@mui/material/Link";

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

export default function SignUp() {
    const { signupWithEmailAndPassword, userState, signinWithGoogle } =
        useContext(FirebaseContext);
    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
    });

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            let result = await signupWithEmailAndPassword(signupData);
            alert("Successfully signed up");
            setSignupData({
                email: "",
                password: "",
            });
        } catch (error) {
            console.log("IN SING UP PAGE COMPONENT", error);
        }
    };

    if (userState) {
        return <Navigate to={"/"} />;
    }

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
                        textAlign={"center"}
                        component="h1"
                        variant="h5"
                        mt={2}
                        fontWeight={"700"}
                    >
                        Sign up to create new <br /> account.
                    </Typography>
                    <Box
                        component={"form"}
                        sx={{ mt: 3 }}
                        onSubmit={handleSignup}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Email Address"
                                    name="email"
                                    type="email"
                                    value={signupData.email}
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
                                            email: e.target.value,
                                        })
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    // color="primary"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={signupData.password}
                                    onChange={(e) =>
                                        setSignupData({
                                            ...signupData,
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
                            Sign Up
                        </Button>

                        <Grid container justifyContent={"center"}>
                            <Grid item>OR</Grid>
                        </Grid>
                        <Button
                            onClick={signinWithGoogle}
                            fullWidth
                            variant="contained"
                            sx={{
                                py: "15px",
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
                                    to={"/login"}
                                    variant="body2"
                                >
                                    Already have an account? Sign in
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
