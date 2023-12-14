import React from "react";
import { useParams } from "react-router-dom";

const ProductsByGender = () => {
    const { gender } = useParams();

    console.log(gender);

    return <div>ProductsByGender</div>;
};

export default ProductsByGender;
