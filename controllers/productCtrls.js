const Product = require('../models/product')

const showAllProducts = async (req,res) => {
    try {
        const product = await Product.find({})
        res.json(product)
    } catch (err) {
        res.status(400).json(err)
    }
}

const getProductsByCategory = async (req, res) => {
    const { categoryName } = req.params;
    try {
        const products = await Product.find({ category: categoryName.toLowerCase() });
        res.json(products)
    } catch (err) {
        res.status(400).json(err)
    }
}

const productDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({message: 'Product not found'})
        }
        const relatedProducts = await Product.find({
            // _id is in the relatedProducts array
            _id: {$in: product.relatedProducts},

            // filter the results to only include products with the same category
            category: {$eq: product.category}
        })
            return res.json({product, relatedProducts})
    } catch (err) {
        res.status(400).json(err);
    }
};

const createProduct = async (req, res) => {
    try {
        const createdProduct = await Product.create(req.body);
        res.json(createdProduct);
    } catch (err) {
        res.status(400).json(err);
    }
};

const updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.productId, req.body);
        const updatedProducts = await Product.find({});
        res.json(updatedProducts);
    } catch (err) {
        res.status(400).json(err);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.productId);
        res.json(deletedProduct);
    } catch (err) {
        res.status(400).json(err);
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