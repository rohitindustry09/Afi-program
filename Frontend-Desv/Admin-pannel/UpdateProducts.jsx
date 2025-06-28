import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const UpdateProducts = () => {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [updating, setUpdating] = useState({});
  const [countdowns, setCountdowns] = useState({});
  const BackendLink = useSelector((state) => state.Link.BackendLink);

  // Fetch products once
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${BackendLink}/api/products`);
      setProducts(res.data.products);

      const initialCountdowns = {};
      res.data.products.forEach((p) => {
        const timePassed = p.timeDiff || 0; // hours passed
        const timeLeft = Math.max(24 - timePassed, 0); // hours left to 24

        const hour = Math.floor(timeLeft);
        const min = Math.floor((timeLeft - hour) * 60);
        const sec = Math.floor((((timeLeft - hour) * 60) - min) * 60);

        initialCountdowns[p._id] = { hour, min, sec };
      });

      setCountdowns(initialCountdowns);
    } catch (err) {
      console.error(err);
    }
  };
  fetchProducts();
}, [BackendLink]);


  // Per-product countdown timers
  useEffect(() => {
    const intervals = [];

    products.forEach((product) => {
      const interval = setInterval(() => {
        setCountdowns(prevCountdowns => {
          const current = prevCountdowns[product._id];
          if (!current) return prevCountdowns;

          let { hour, min, sec } = current;

          if (hour === 0 && min === 0 && sec === 0) {
            clearInterval(interval);
            return prevCountdowns; // Time’s up — no change
          }

          if (sec === 0) {
            if (min === 0) {
              if (hour > 0) {
                hour -= 1;
                min = 59;
                sec = 59;
              }
            } else {
              min -= 1;
              sec = 59;
            }
          } else {
            sec -= 1;
          }

          return {
            ...prevCountdowns,
            [product._id]: { hour, min, sec },
          };
        });
      }, 1000);

      intervals.push(interval);
    });

    // Cleanup: clear all intervals when component unmounts
    return () => {
      intervals.forEach(clearInterval);
    };
  }, [products]);

  const handleExpand = (id, product) => {
    if (expanded === id) {
      setExpanded(null);
    } else {
      setExpanded(id);
      setUpdating({
        title: product.title,
        description: product.description,
        offers: product.offers.map(offer => ({
          platform: offer.platform,
          price: offer.price,
          url: offer.affiliateLink.url,
        })),
      });
    }
  };

  const handleOfferChange = (index, field, value) => {
    const updatedOffers = [...updating.offers];
    if (field === 'price') {
      updatedOffers[index].price = Number(value);
    } else if (field === 'url') {
      updatedOffers[index].url = value;
    }
    setUpdating({ ...updating, offers: updatedOffers });
  };

  const handleUpdate = async (id) => {
    try {
      const res = await axios.put(`${BackendLink}/api/products/${id}`, updating);
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert('Failed to update.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">📝 Update Products</h2>

{products.map((product) => {
  const time = countdowns[product._id] || { hour: 0, min: 0, sec: 0 };
  return (
    <div key={product._id} className="border rounded mb-3 p-3 shadow-sm position-relative">
      <h5 className="position-absolute top-0 end-0 m-2 small" style={{
        color: 'red !important',
        fontSize: '1rem'
      }}>
         {`${String(time.hour).padStart(2, '0')}:${String(time.min).padStart(2, '0')}:${String(time.sec).padStart(2, '0')}`}
      </h5>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          {product.images && product.images[0] && (
            <img
              src={product.images[0]}
              alt={product.title}
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }}
            />
          )}
          <div>
            <h5 className="mb-0">{product.title}</h5>
            <small>{product.description}</small>
          </div>
        </div>
        <button
          className="btn btn-link text-decoration-none"
          onClick={() => handleExpand(product._id, product)}
        >
          <i
            className={`bi ${expanded === product._id ? 'bi-chevron-up' : 'bi-chevron-down'}`}
          ></i>
        </button>
      </div>

          {expanded === product._id && (
              <div className="mt-3">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={updating.title || ''}
                    onChange={(e) => setUpdating({ ...updating, title: e.target.value })}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={updating.description || ''}
                    onChange={(e) =>
                      setUpdating({ ...updating, description: e.target.value })
                    }
                  ></textarea>
                </div>

                {updating.offers &&
                  updating.offers.map((offer, idx) => (
                    <div key={idx} className="border rounded p-2 mb-2">
                      <strong>{offer.platform}</strong>
                      <div className="mb-2">
                        <label className="form-label">Price</label>
                        <input
                          type="number"
                          className="form-control"
                          value={offer.price}
                          onChange={(e) =>
                            handleOfferChange(idx, 'price', e.target.value)
                          }
                        />
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Affiliate Link</label>
                        <input
                          type="text"
                          className="form-control"
                          value={offer.url}
                          onChange={(e) =>
                            handleOfferChange(idx, 'url', e.target.value)
                          }
                        />
                      </div>
                    </div>
                  ))}

                <button
                  className="btn btn-primary"
                  onClick={() => handleUpdate(product._id)}
                >
                  💾 Save Changes
                </button>
              </div>
            )}
    </div>
  );
})}

    </div>
  );
};

export default UpdateProducts;
