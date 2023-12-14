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

// user image -> storage -> path -> database
// database -> path -> fetch url from storage -> componennt

// image -> storage -> path -> download url -> database
