import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../firebase/firebase.config";

const storage = getStorage(app);

export const uploadImage = async (imageFile) => {
    try {
        let imageRef = ref(
            storage,
            `products/${Date.now() + "-" + imageFile.name.split(" ").join("-")}`
        );
        const res = await uploadBytes(imageRef, imageFile);
        let url = await getDownloadURL(ref(storage, res.metadata.fullPath));
        return url;
    } catch (error) {
        console.log("ERROR WHILE Uploading PRoduct Image", error);
        return error.message;
    }
};

export const filterProducts = (
    products,
    search,
    selectedCategories,
    priceRange
) => {
    return products.filter((product) => {
        if (
            search &&
            !product.productName.toLowerCase().includes(search.toLowerCase())
        ) {
            return false;
        }
        // ["Sneakers"] "Shirt"
        else if (
            selectedCategories.length > 0 &&
            !selectedCategories.includes(product.category)
        ) {
            return false;
        } else if (
            product.price < priceRange[0] ||
            product.price > priceRange[1]
        ) {
            return false;
        }

        return true;
        // true or false
    });
};

// user image -> storage -> path -> database
// database -> path -> fetch url from storage -> componennt

// image -> storage -> path -> download url -> database
