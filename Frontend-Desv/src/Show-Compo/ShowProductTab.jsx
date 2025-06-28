import imageLotus2nd from "/Flowers/lotus_2nd.jpg";
import imageLotus from "/Flowers/lotus.jpg";
import imageUnk from "/Flowers/flowerUnknown.jpg";
import React, { useEffect, useState } from "react";
import { Heart, ShoppingCart, DollarSign } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

import VendorPriceComparison from "../Comparison-Compo/VendorPriceComparison";
import ProductCards from '../Product-Compo/ProductCards.jsx';
import GiftRecommendations from './RecommendUI/GiftRecommendations';
import DailyDealsCarousel from '../Banner-Compo/DailyDealsCarousel';
import './ShowProductTab.css'

const productData = {
  name: "Elegant Wooden Chair",
  description:
    "This handcrafted wooden chair is designed for comfort and durability, perfect for any modern or classic interior.",
  images: [imageLotus2nd, imageLotus, imageUnk],
  vendorPrices: JSON.stringify([
    {
      vendor: "Amazon",
      price: "144.99",
      url: "https://www.amazon.com/s?k=Elegant+Wooden+Chair",
    },
    {
      vendor: "Flipkart",
      price: "145.49",
      url: "https://www.flipkart.com/search?q=Elegant+Wooden+Chair",
    },
    {
      vendor: "Snapdeal",
      price: "147.00",
      url: "https://www.snapdeal.com/search?keyword=Elegant+Wooden+Chair",
    },
  ]),
};

export default function ShowProducts() {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [priceInfo, setPriceInfo] = useState({ price: 0, vendor: "" });

  useEffect(() => {
    try {
      const prices = JSON.parse(productData.vendorPrices);
      if (prices.length > 0) {
        const sorted = prices.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        setPriceInfo({ price: parseFloat(sorted[0].price), vendor: sorted[0].vendor });
      }
    } catch (err) {
      console.error("Failed to parse vendor prices", err);
    }
  }, []);

  return (
    <div className="container-fluid py-2">
      <div className="row">
        {/* Left - Images */}
        <div className="col-md-6">
          <img
            src={selectedImage}
            alt="Product"
            className="img-fluid rounded shadow product-image image-we-selected"
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
          <div className="d-flex gap-3 mt-3">
            {productData.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx}`}
                onClick={() => setSelectedImage(img)}
                className={`img-thumbnail rounded cursor-pointer border ${
                  selectedImage === img ? "border-primary" : "border-light"
                }`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right - Details */}
        <div className="col-md-6 heading-down">
          <h1 className="h3 fw-bold text-dark">{productData.name}</h1>
          <p className="text-muted lead">{productData.description}</p>

          {/* show lowest vendor price */}
          <div className="h4 d-flex align-items-center mb-2">
           <span className="price-withour-cutout" >₹{priceInfo.price.toFixed(2)}</span>
           <small className="text-muted ms-2">from {priceInfo.vendor}</small>
          </div>


          {/* Cart & Favorite */}
          <div className="d-flex gap-3 mt-4">
            <button className="btn btn-add-to-cart d-flex align-items-center fw-bold justify-content-center p-3">
              <ShoppingCart size={18} className="me-2" /> Add to Cart
            </button>
            <button className="btn d-flex align-items-center btn-favourite">
              <Heart size={18} color="red" className="ms-2 me-2" /> {/*Favorite*/}
            </button>
          </div>

          {/* Buy Now */}
        <a href="#price-comparison">
          <button className="btn btn-success btn-find-out w-100 mt-3 py-3">
            Buy via Partner Store
          </button>
        </a>
        </div>
      </div>

      {/*Vendor Price Comparison below */}
      <VendorPriceComparison
        vendorPrices={productData.vendorPrices}
        productName={productData.name}
      />
      <GiftRecommendations />
      <DailyDealsCarousel />
    </div>
  );
}