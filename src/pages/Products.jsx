import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    Slider,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import shirt from "../assets/shirt.jpg";
import ProductCard from "../components/ProductCard";
import { FirebaseContext } from "../context/FirebaseContextProvider";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSelector } from "react-redux";

const Products = () => {
    const { products, loading, error } = useSelector(
        (state) => state.productState
    );
    return (
        <Box
            sx={{
                px: {
                    xs: "20px",
                    sm: "25px",
                    md: "40px",
                },
                pt: "50px",
                pb: "30px",
            }}
        >
            <Box display={"flex"}>
                <Box
                    sx={{
                        width: "30%",
                        px: "20px",
                    }}
                >
                    <Box
                        sx={{
                            p: "20px",
                            bgcolor: "white",
                        }}
                    >
                        <TextField
                            placeholder="Search Products"
                            size="small"
                            fullWidth
                        />
                    </Box>

                    <Box
                        sx={{
                            p: "20px",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                }}
                            >
                                Filter By Category
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                            }}
                        >
                            <FormControlLabel
                                label="Shirts"
                                control={<Checkbox />}
                            />
                            <FormControlLabel
                                label="Tshirts"
                                control={<Checkbox />}
                            />
                            <FormControlLabel
                                label="Pants"
                                control={<Checkbox />}
                            />
                            <FormControlLabel
                                label="Sneaker"
                                control={<Checkbox />}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            p: "20px",
                        }}
                    >
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontSize: "20px",
                                    fontWeight: "700",
                                }}
                            >
                                Filter By Price
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                            }}
                        >
                            <Slider
                                size="small"
                                value={[0, 10000]}
                                valueLabelDisplay="auto"
                                getAriaValueText={() => "Price"}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "70%",
                        px: "20px",
                    }}
                >
                    <Box bgcolor={"white"}>
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: "32px",
                                    fontWeight: "700",
                                    pl: "20px",
                                }}
                            >
                                Shop
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "13px",
                                    fontWeight: "500",
                                    pl: "20px",
                                }}
                            >
                                Showing 8 of 19 results
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container minHeight={"300px"}>
                                {products.map((product) => {
                                    return (
                                        <Grid
                                            key={product.id}
                                            item
                                            xs={12}
                                            sm={6}
                                            lg={6}
                                            p="20px"
                                        >
                                            <ProductCard
                                                product={{
                                                    image: product.image,
                                                    name: product.productName,
                                                    description:
                                                        product.description,
                                                    price: product.price,
                                                    id: product.id,
                                                }}
                                            />
                                        </Grid>
                                    );
                                })}
                                {loading && (
                                    <Grid
                                        item
                                        height={"300px"}
                                        display={"flex"}
                                        flex={1}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                    >
                                        <ClipLoader color="#000" size={50} />
                                    </Grid>
                                )}
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Products;
