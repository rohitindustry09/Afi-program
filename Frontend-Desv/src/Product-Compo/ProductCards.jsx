import React,{ useState, useEffect } from "react";
import imageLotus2nd from '/Flowers/lotus_2nd.jpg'
import imageLotus from '/Flowers/lotus.jpg'
import "./ProductCards.css";
import { Link, useParams } from 'react-router-dom'

const products = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  mainImage: imageLotus2nd,
  extraImages: [
    imageLotus,
    imageLotus,
    imageLotus
  ],
  discount: Math.floor(Math.random() * 50) + 10,
  price: (Math.random() * 100 + 10).toFixed(2),
  details: "This is a sample product with great features.",
}));

const ProductCards = () => {
  
const [measureDistance, setMeasureDistance] = useState(70)
const [reactOnMeasure, setReactOnMeasure] = useState(false)

 /* const location = useLocation();
  const hideNavigatiomBar = location.pathname.startsWith('/category/:category/');*/
  const { category } = useParams();
  
  useState(()=>{
    if (measureDistance == 70) {
      setTimeout(function() {
        setReactOnMeasure(true)
      }, 1000);
    } 
  }, [])
  return (

<div className="pc-cards-container">
  {products.map((product) => (
    <Link to={`/category/${category}/show/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
      <div className="pc-card">
        <div className="pc-main-info">
          <div className="pc-discount-badge">
            <span>{product.discount}% OFF</span>
          </div>
          <img src={product.mainImage} alt="Main" className="pc-main-image" />
          <div className="pc-price mt-1 fs-5">${product.price}</div>
          <p className="pc-details">{product.details}</p>
        </div>
        <div className="pc-stair-images">
          {product.extraImages.map((src, index) => (
            <div
              key={index}
              className={`pc-every-img-parent ${!reactOnMeasure ? "pc-starting-point" : ""}`}
              style={{
                left: reactOnMeasure ? measureDistance / index : 0,
                top: reactOnMeasure ? measureDistance / index : 0,
                boxShadow: reactOnMeasure ? '5px 5px 5px rgba(0,0,0,0.3)' : ''
              }}
            >
              <img src={src} alt={`Extra ${index + 1}`} className="pc-extra-image" />
            </div>
          ))}
        </div>
      </div>
    </Link>
  ))}
</div>

  );
};

export default ProductCards;
