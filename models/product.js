const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 100},
    price: { type: Number, required: true },
    description: { type: String, required: true, maxLength: 250},
    category: { 
        type: String, 
        enum: ['engine', 'transmission', 'suspension', 'brakes', 'exhaust', 'interior', 'exterior'], 
        required: true 
      },
    imageUrl: { type: String, required: true },
    relatedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
  });

const Product = mongoose.model('Product', productSchema)

module.exports = Product
