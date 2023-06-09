const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 100},
    price: { type: Number, required: true },
    description: { type: String, required: true, maxLength: 250},
    category: { 
        type: String, 
        enum: ['kissCut', 'peeker', 'boxSlap'], 
        required: true 
      },
    imageUrl: { type: String, default: 'https://placewaifu.com/image/350?blur' },
    relatedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  });

const Product = mongoose.model('Product', productSchema)

module.exports = Product
