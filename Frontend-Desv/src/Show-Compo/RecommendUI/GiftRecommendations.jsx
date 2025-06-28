import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageLotus from '/Flowers/lotus.jpg';

const products = [
  {
    title: 'That Birthday Glow',
    price: 2445,
    originalPrice: 2695,
    discount: '9% OFF',
    rating: 3.6,
    reviews: 21,
    image: imageLotus,
  },
  {
    title: 'Honeydew Mist',
    price: 1995,
    rating: 4.1,
    reviews: 16,
    image: imageLotus,
  },
  {
    title: 'Blueberry Blooms',
    price: 2395,
    rating: 4.5,
    reviews: 11,
    image: imageLotus,
  },
  {
    title: 'Plush in Pink',
    price: 4345,
    rating: 5,
    reviews: 3,
    image: imageLotus,
  },
];

const ProductCard = ({ product }) => (
  <div className="col-6 p-0 m-0">
    <div className="card h-100 shadow-sm m-0 p-1 border-0 rounded-0">
      <div className="position-relative">
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{ objectFit: 'cover', height: '250px' }}
        />
        <button className="btn btn-light position-absolute top-0 end-0 m-0 rounded-edges">
          <i class="bi bi-heart"></i>
        </button>
      </div>
      <div className="card-body p-2">
        <h6 className="card-title mb-1">{product.title}</h6>
        <div className="d-flex align-items-center">
          <h6 className="mb-0">₹ {product.price}</h6>
          {product.originalPrice && (
            <small className="text-muted ms-2 text-decoration-line-through">
              ₹ {product.originalPrice}
            </small>
          )}
          {product.discount && (
            <span className="badge bg-success ms-2">{product.discount}</span>
          )}
        </div>
        <div className="d-flex align-items-center mt-1">
          <small className="me-2">{product.rating} ⭐</small>
          <small className="text-muted">({product.reviews})</small>
        </div>
        <div className="badge bg-light text-primary mt-2">
          🚚 Same Day Delivery
        </div>
      </div>
    </div>
  </div>
);

const GiftRecommendations = () => {
  return (
    <div className="container-fluid p-0 pt-5 m-0 mb-5">
      <h5 className="mb-2 ps-2">Similar Gift Recommendations</h5>
      <div className="row g-0 m-0">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </div>
  );
};

export default GiftRecommendations;
