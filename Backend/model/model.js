const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  brandName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  productImage: { type: String, required: true },
  date: { type: Date, default: Date.now }
}); 
module.exports= mongoose.model('Product', productSchema);   
