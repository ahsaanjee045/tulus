import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InputWithLabel from "../../components/InputWithLabel";
import { Image } from "@mui/icons-material";
import { FirebaseContext } from "../../context/FirebaseContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../slices/productSlice";
import { getAllCategories } from "../../slices/categorySlice";
import { ClipLoader } from "react-spinners";

const PRODUCT_INITIAL_STATE = {
    productName: "",
    category: "",
    gender: "",
    price: 0,
    brand: "",
    inStock: 0,
    description: "",
    image: "",
};

const AddProduct = () => {
    const dispatch = useDispatch();
    const [productData, setProductData] = useState(PRODUCT_INITIAL_STATE);
    const [image, setImage] = useState("");

    const {
        categories,
        loading: categoryLoading,
        error,
    } = useSelector((state) => state.categoryState);
    const { loading: productLoading } = useSelector(
        (state) => state.productState
    );

    useEffect(() => {
        dispatch(getAllCategories());
    }, []);

    const handleAddProduct = async () => {
        if (!productData.image) {
            alert("Product image must be selected");
            return;
        }
        dispatch(createProduct(productData));
        setProductData(PRODUCT_INITIAL_STATE);
    };

    console.log(productLoading);

    return (
        <Box
            sx={{
                padding: "20px",
                backgroundColor: "#fafafa",
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: "15px",
                    padding: "15px",
                }}
            >
                <Box
                    sx={{
                        pb: "8px",
                        borderBottom: "2.5px solid #e5e2e2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                        }}
                    >
                        Basic Information
                    </Typography>
                    <Button
                        disabled={productLoading}
                        onClick={handleAddProduct}
                        variant="contained"
                        sx={{
                            borderRadius: "0",
                            bgcolor: "black",
                            ":hover": {
                                bgcolor: "black",
                            },
                        }}
                    >
                        {productLoading ? (
                            <ClipLoader size={15} color="#fff" />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </Box>
                <Box component={"form"} mt={2}>
                    <InputWithLabel
                        value={productData.productName}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                productName: e.target.value,
                            })
                        }
                        label={"Product Name"}
                        placeholder={"Enter Product Name"}
                    />
                    <Box
                        mb={"20px"}
                        sx={{
                            display: "flex",
                            gap: "15px",
                            alignItems: "center",
                        }}
                    >
                        <Box flex={2} mb={"20px"}>
                            <InputLabel
                                sx={{
                                    fontSize: "13px",
                                    fontWeight: "600",
                                }}
                            >
                                Category
                            </InputLabel>
                            <Select
                                value={productData.category}
                                onChange={(e) =>
                                    setProductData({
                                        ...productData,
                                        category: e.target.value,
                                    })
                                }
                                sx={{
                                    mt: "8px",
                                    "& div, & input": {
                                        borderRadius: "2px",
                                    },
                                }}
                                // placeholder="Enter Category Name"
                                size="small"
                                fullWidth
                            >
                                <MenuItem value={""}>
                                    --Select Category--
                                </MenuItem>
                                {categories.map((category) => {
                                    return (
                                        <MenuItem
                                            value={category.categoryName}
                                            key={category.id}
                                        >
                                            {category.categoryName}
                                        </MenuItem>
                                    );
                                })}
                            </Select>
                        </Box>
                        <Box flex={1} mb={"20px"}>
                            <InputLabel
                                sx={{
                                    fontSize: "13px",
                                    fontWeight: "600",
                                }}
                            >
                                Gender
                            </InputLabel>
                            <Select
                                value={productData.gender}
                                onChange={(e) =>
                                    setProductData({
                                        ...productData,
                                        gender: e.target.value,
                                    })
                                }
                                sx={{
                                    mt: "8px",
                                    "& div, & input": {
                                        borderRadius: "2px",
                                    },
                                }}
                                placeholder="Enter Category Name"
                                size="small"
                                fullWidth
                            >
                                <MenuItem>--Select Gender--</MenuItem>
                                <MenuItem value="men">Male</MenuItem>
                                <MenuItem value="women">Female</MenuItem>
                            </Select>
                        </Box>
                        <InputWithLabel
                            flex={1}
                            value={productData.price}
                            onChange={(e) =>
                                setProductData({
                                    ...productData,
                                    price: e.target.value,
                                })
                            }
                            label={"Price"}
                            placeholder={"Enter Price"}
                        />
                    </Box>
                    <InputWithLabel
                        value={productData.brand}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                brand: e.target.value,
                            })
                        }
                        label={"Brand Name"}
                        placeholder={"Enter Brand name"}
                    />
                    <InputWithLabel
                        value={productData.inStock}
                        onChange={(e) =>
                            setProductData({
                                ...productData,
                                inStock: e.target.value,
                            })
                        }
                        label={"InStock"}
                        placeholder={"Enter Stock Number"}
                    />
                    <Box mb={"20px"}>
                        <InputLabel
                            sx={{
                                fontSize: "13px",
                                fontWeight: "600",
                            }}
                        >
                            Description
                        </InputLabel>
                        <TextField
                            value={productData.description}
                            onChange={(e) =>
                                setProductData({
                                    ...productData,
                                    description: e.target.value,
                                })
                            }
                            sx={{ mt: "8px" }}
                            placeholder="Enter Description"
                            fullWidth
                            multiline
                            rows={5}
                        />
                    </Box>
                    <Box mb={"20px"}>
                        <InputLabel
                            sx={{
                                fontSize: "13px",
                                fontWeight: "600",
                            }}
                        >
                            Product Image
                        </InputLabel>
                        <input
                            onChange={(e) => {
                                let file = e.target.files[0];
                                setProductData({
                                    ...productData,
                                    image: file,
                                });

                                let fileReader = new FileReader();
                                fileReader.onload = (e) => {
                                    setImage(e.currentTarget.result);
                                };
                                fileReader.readAsDataURL(file);
                            }}
                            // multiple
                            type="file"
                            accept="image/*"
                            hidden
                            id="product-image"
                        />
                        {!productData.image ? (
                            <Box
                                onClick={() => {
                                    document
                                        .getElementById("product-image")
                                        .click();
                                }}
                                sx={{
                                    mt: "8px",
                                    border: "2px dashed #e5e2e2",
                                    padding: "40px 0",
                                    borderRadius: "7px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    ":hover .icon": {
                                        scale: "1.2",
                                    },
                                }}
                            >
                                <Box textAlign={"center"}>
                                    <Image
                                        className="icon"
                                        sx={{
                                            fontSize: "30px",
                                            color: "#898787",
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    />
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontSize: "16px",
                                            color: "#898787",
                                        }}
                                    >
                                        Click Here to upload Image
                                    </Typography>
                                </Box>
                            </Box>
                        ) : (
                            <>
                                <Box
                                    sx={{
                                        mt: "15px",
                                        height: "200px",
                                        width: "200px",
                                        border: "0.3px solid lightgray",
                                        borderRadius: "10px",
                                        overflow: "hidden",
                                    }}
                                >
                                    {image ? (
                                        <>
                                            <img
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                    objectPosition: "center",
                                                }}
                                                src={image}
                                                alt=""
                                            />
                                        </>
                                    ) : (
                                        <Box
                                            sx={{
                                                height: "100%",
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <ClipLoader
                                                size={20}
                                                color="#000"
                                            />
                                        </Box>
                                    )}
                                </Box>
                                <Button
                                    onClick={() => {
                                        document
                                            .getElementById("product-image")
                                            .click();
                                    }}
                                    size="small"
                                    sx={{
                                        mt: 2,
                                        fontSize: "13px",
                                        color: "black",
                                        border: "0.7px solid black",
                                        borderRadius: "0",
                                    }}
                                >
                                    Change Image
                                </Button>
                            </>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default AddProduct;
