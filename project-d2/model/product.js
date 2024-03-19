const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productNmae: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    timestamp: true,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
