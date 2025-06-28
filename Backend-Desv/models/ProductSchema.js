const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: [{ type: String }],
  images: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  offers: [
    {
      platform: { type: String, required: true }, //Amazon, Flipkart, etc
      price: { type: Number, required: true },
      affiliateLink: {
        url: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    }
  ],
});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;
