
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  url: String,
  qty: Number,
  keywords: String,
});

let item = mongoose.model('product', productSchema);

module.exports = item;
