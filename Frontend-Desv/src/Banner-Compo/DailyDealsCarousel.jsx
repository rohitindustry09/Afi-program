import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './All.css'; // Optional for custom styling
import imageLotus2nd from '/Flowers/lotus_2nd.jpg'
import imageLotus from '/Flowers/lotus.jpg'
const items = [
  {
    title: "Sports & Fitness",
    discount: "Upto 20% Off",
    image: imageLotus
  },
  {
    title: "Grocery",
    discount: "Upto 20% Off",
    image: imageLotus2nd
  },
  {
    title: "Auto Accessories",
    discount: "Upto 20% Off",
    image: imageLotus
  },
  {
    title: "Books & Stationary",
    discount: "Upto 20% Off",
    image: imageLotus2nd
  },
  {
    title: "Watches",
    discount: "Upto 20% Off",
    image: imageLotus
  },
  {
    title: "Flowers",
    discount: "Upto 50% Off",
    image: imageLotus
  },
];

const DailyDealsCarousel = () => {
  return (
    <div className="container-fluid py-1">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Daily Deals</h5>
        <span className="text-danger">⏳00h : 57m : 28s</span>
      </div>
      <div className="carousel-scroll d-flex overflow-auto gap-3 pb-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="card flex-shrink-0"
            style={{ width: '160px', minWidth: '160px' }}
          >
            <img
              src={item.image}
              className="card-img-top p-3"
              alt={item.title}
            />
            <div className="card-body p-2">
              <h6 className="card-title">{item.title}</h6>
              <p className="text-success">{item.discount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDealsCarousel;
