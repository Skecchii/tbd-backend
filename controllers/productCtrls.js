const Product = require('../models/product')
const cloudinaryCtrls = require('./cloudinaryCtrls')

const showAllProducts = async (req,res) => {
    try {
        const products = await Product.find({})
        res.json(products)
    } catch (err) {
        console.log(`server unable to retrieve products, ${err} `)
        res.status(400).json({message: 'error retrieving products'})
    }
}

const getProductsByCategory = async (req, res) => {
    const { categoryName } = req.params;
    try {
        const products = await Product.find({ category: categoryName });
        console.log(products)
        res.json(products)
    } catch (err) {
        console.log(`server unable to retrieve products by category, ${err}`)
        res.status(400).json({message: 'error retrieving products by category'})
    }
}

const productDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({message: 'product not found'})
        }
        const relatedProducts = await Product.find({
            // _id is in the relatedProducts array
            _id: {$in: product.relatedProducts},

            // filter the results to only include products with the same category
            category: {$eq: product.category}
        })
            return res.json({product, relatedProducts})
    } catch (err) {
        console.log(`server unable to retrieve product details, ${err}`)
        res.status(400).json({message: 'error retrieving product details'});
    }
};

const createProduct = async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body);
        res.json(createdProduct);
    } catch (err) {
        console.log(`server unable to create product, ${err}`)
        res.status(400).json({message: 'error creating product'});
    }
};

const updateProduct = async (req, res) => {
    try {
        let productData = req.body
        if (req.file) {
            const imageUrl = await cloudinaryCtrls.uploadImage(req, res);
            productData = {...req.body, imageUrl}
        }
        await Product.findByIdAndUpdate(req.params.productId, productData);
        const updatedProducts = await Product.find({});
        res.json(updatedProducts);
    } catch (err) {
        console.error(`server unable to update product, ${err}`)
        res.status(400).json({message: 'error updating product'});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(deletedProduct);
    } catch (err) {
        console.log(`server unable to delete product, ${err}`)
        res.status(400).json({message: 'error deleting product'});
    }
};


module.exports = {
    showAllProducts,
    productDetails,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory
}