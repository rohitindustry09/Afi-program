import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddProductSite = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [offers, setOffers] = useState([]);
  const [offerInput, setOfferInput] = useState({ platform: '', price: '', url: '' });

  const [imageInput, setImageInput] = useState('');
  const [images, setImages] = useState([]);

  const [categoryInput, setCategoryInput] = useState('');
  const [categories, setCategories] = useState([]);
  const BackendLink = useSelector((state)=> state.Link.BackendLink);
  const handleAddOffer = () => {
    if (!offerInput.platform || !offerInput.price || !offerInput.url) {
      alert('Fill all offer fields');
      return;
    }

    const newOffer = {
      platform: offerInput.platform,
      price: parseFloat(offerInput.price),
      affiliateLink: { url: offerInput.url },
    };

    setOffers([...offers, newOffer]);
    setOfferInput({ platform: '', price: '', url: '' });
  };

  const handleAddImage = () => {
    if (!imageInput) return;
    setImages([...images, imageInput.trim()]);
    setImageInput('');
  };

  const handleAddCategory = () => {
    if (!categoryInput) return;
    setCategories([...categories, categoryInput.trim()]);
    setCategoryInput('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert('Enter a product title');
      return;
    }

    try {
      const res = await axios.post(`${BackendLink}/api/add/products`, {
        title,
        description,
        images,
        categories,
        offers,
      });
      alert('✅ Product saved!');
      console.log(res.data);

      // Reset
      setTitle('');
      setDescription('');
      setImages([]);
      setCategories([]);
      setOffers([]);
    } catch (err) {
      console.error(err);
      alert('❌ Failed to save');
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4">🛍️ Add New Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <hr className="my-4" />

          <h5 className="mb-3">🖼️ Images</h5>
          <div className="input-group mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="Image URL"
              value={imageInput}
              onChange={(e) => setImageInput(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddImage}
            >
              Add Image
            </button>
          </div>

          {images.length > 0 && (
            <div className="row g-3 mb-4">
              {images.map((img, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <div className="card h-100 border-0 shadow-sm">
                    <img
                      src={img}
                      alt={`img-${idx}`}
                      className="card-img-top"
                      style={{ objectFit: 'cover', height: '150px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <hr className="my-4" />

          <h5 className="mb-3">🏷️ Categories</h5>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add category"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-success"
              onClick={handleAddCategory}
            >
              Add Category
            </button>
          </div>

          {categories.length > 0 && (
            <div className="mb-4">
              <div className="d-flex flex-wrap gap-2">
                {categories.map((cat, idx) => (
                  <span key={idx} className="badge bg-dark px-3 py-2">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          )}

          <hr className="my-4" />

          <h5 className="mb-3">🏪 Offers</h5>
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Platform (e.g., Amazon)"
                value={offerInput.platform}
                onChange={(e) =>
                  setOfferInput({ ...offerInput, platform: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={offerInput.price}
                onChange={(e) =>
                  setOfferInput({ ...offerInput, price: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <input
                type="url"
                className="form-control"
                placeholder="Affiliate link URL"
                value={offerInput.url}
                onChange={(e) =>
                  setOfferInput({ ...offerInput, url: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-outline-primary mb-4"
            onClick={handleAddOffer}
          >
            ➕ Add Offer
          </button>

          {offers.length > 0 && (
            <div className="mb-4">
              <h6>Offers:</h6>
              <ul className="list-group">
                {offers.map((offer, idx) => (
                  <li key={idx} className="list-group-item d-flex justify-content-between">
                    <span>{offer.platform} - ₹{offer.price}</span>
                    <a href={offer.affiliateLink.url} target="_blank" rel="noreferrer">View Link</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-end">
            <button type="submit" className="btn btn-success btn-lg">
              🚀 Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductSite;
