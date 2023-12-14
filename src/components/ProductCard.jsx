import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/FirebaseContextProvider";
import preview from "../assets/preview.png";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "430px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                component={Link}
                to={`/product/${product.id}`}
                sx={{
                    width: "100%",
                    height: "300px",
                    flex: 1,
                    borderRadius: "30px",
                    overflow: "hidden",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    src={product.image}
                    alt=""
                />
            </Box>
            <Box mt={"10px"} pl={"10px"}>
                <Typography
                    sx={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        my: "5px",
                    }}
                >
                    {product.name.length > 40
                        ? product.name.slice(0, 37) + "..."
                        : product.name}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "13px",
                        color: "#747272",
                    }}
                >
                    {product.description.length > 45
                        ? product.description.slice(0, 45) + "..."
                        : product.description}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "17px",
                        fontWeight: "bold",
                        my: "5px",
                    }}
                >
                    ₹{product.price}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductCard;
