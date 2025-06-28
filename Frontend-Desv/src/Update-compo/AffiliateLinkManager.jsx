import React, { useState, useEffect } from 'react';

const initialLinks = [
  {
    id: 1,
    product: 'Wireless Earbuds',
    platform: 'Amazon',
    url: 'https://amazon.in/affiliate-earbuds',
    expiresAt: new Date(Date.now() + 3600 * 1000), // 1 hour
  },
  {
    id: 2,
    product: 'Sneakers',
    platform: 'Flipkart',
    url: 'https://flipkart.com/affiliate-sneakers',
    expiresAt: new Date(Date.now() + 15 * 60 * 1000), // 15 mins
  },
  {
    id: 3,
    product: 'Rose Bouquet',
    platform: 'Flora',
    url: 'https://flora.com/affiliate-roses',
    expiresAt: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hrs
  },
];

const getTimeRemaining = (expiresAt) => {
  const total = new Date(expiresAt) - new Date();
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor(total / 1000 / 60 / 60);
  return { total, hours, minutes };
};

const AffiliateLinkManager = () => {
  const [links, setLinks] = useState(initialLinks);

  useEffect(() => {
    const interval = setInterval(() => setLinks([...links]), 30000);
    return () => clearInterval(interval);
  }, [links]);

  const handleChange = (id, value) => {
    setLinks((prev) =>
      prev.map((link) =>
        link.id === id ? { ...link, url: value } : link
      )
    );
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">Affiliate Link Manager</h2>
      <div className="row g-4">
        {links.map((link) => {
          const { hours, minutes, total } = getTimeRemaining(link.expiresAt);
          const isExpiring = total <= 3600000; // < 1hr
          const isExpired = total <= 0;

          const countdown = isExpired
            ? 'Expired'
            : `${hours > 0 ? `${hours}h ` : ''}${minutes}min`;

          return (
            <div key={link.id} className="col-md-6 col-lg-4">
              <div
                className="card shadow-sm border-0 h-100"
                style={{ borderLeft: isExpiring ? '5px solid #ffc107' : '5px solid #0d6efd' }}
              >
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title mb-1">{link.product}</h5>
                  <small className="text-muted mb-3">{link.platform}</small>
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={link.url}
                    onChange={(e) => handleChange(link.id, e.target.value)}
                  />
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span
                      className={`badge ${
                        isExpired
                          ? 'bg-danger'
                          : isExpiring
                          ? 'bg-warning text-dark'
                          : 'bg-success'
                      }`}
                    >
                      {countdown}
                    </span>
                    <button className="btn btn-sm btn-outline-primary">Save</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AffiliateLinkManager;
