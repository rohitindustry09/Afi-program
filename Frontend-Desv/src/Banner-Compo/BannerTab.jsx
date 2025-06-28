import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageLotus2nd from '/Flowers/lotus_2nd.jpg'

const BannerTab = () => {
  const items = [
    {
      img: imageLotus2nd,
      title: 'Samsung A9+',
      subtitle: 'From ₹15,999*',
    },
    {
      img: imageLotus2nd,
      title: 'MSI laptops',
      subtitle: 'From ₹31,990',
    },
    {
      img: imageLotus2nd,
      title: "Levi's, WROGN...",
      subtitle: '50–80% Off',
    },
    {
      img: imageLotus2nd,
      title: 'Pens &',
      subtitle: 'Min. 30%',
    },
  ];

  return (
    <div className="container my-4 p-4 rounded">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">Campus ready picks</h5>
        <span className="badge bg-warning text-dark">LOWEST PRICES</span>
      </div>
      <div className="row text-center">
        {items.map((item, index) => (
          <div key={index} className="col-6 col-md-3 mb-3">
            <div className="p-2 shadow" style={{ background: '#fff'}}>
              <img src={item.img} alt={item.title} className="img-fluid rounded mb-2" />
              <div><strong>{item.title}</strong></div>
              <small>{item.subtitle}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerTab;
