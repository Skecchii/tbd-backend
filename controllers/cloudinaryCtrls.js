const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// set up cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "product-images",
        allowed_formats: ["jpg", "png"],
    },
});

const uploadImage = async (req, res) => {
    try {
        let imageUrl = "";
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url;
        res.json(imageUrl)
    } catch (err) {
        console.error(`Server unable to upload image, ${err}`);
    }
};

module.exports = {
    uploadImage,
    storage
};