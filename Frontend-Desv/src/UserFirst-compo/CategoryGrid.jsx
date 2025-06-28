import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css'; // Put custom styles here if needed
const categories = [
  {
    title: 'Flowers',
    image: '/flower-banner.webp',
    imageBg: '#f9ccd5', // soft pink - floral vibe
    onClick: () => alert('Go to Nature'),
  },
  {
    title: 'Food',
    image: '/food-banner.webp',
    imageBg: '#6cff9b', // papaya whip - warm & appetizing
    onClick: () => alert('Go to Food'),
  },
  {
    title: 'Pets Supplies',
    image: '/petsSuppliesBanner.png',
    imageBg: '#fdebd0', // light peach - friendly
    onClick: () => alert('Go to Food'),
  },
  {
    title: 'Women\'s Wears',
    image: '/womenWearBanner.png',
    imageBg: '#f6e7f5', // soft lavender - feminine
    onClick: () => alert('Go to Women\'s Wears'),
  },
  {
    title: 'Men\'s Wears',
    image: '/MensWearsBanner.png',
    imageBg: '#dce3ea', // slate blue-gray - masculine
    onClick: () => alert('Go to Men\'s Wears'),
  },
  {
    title: 'Shoes',
    image: '/shoes-banner.jpg',
    imageBg: '#ff9d6c', // neutral gray - versatile
    onClick: () => alert('Go to Shoes'),
  },
  {
    title: 'Health & Fitness',
    image: '/healthFitnessBanner.jpg',
    imageBg: '#d4f4dd', // mint green - healthy vibe
    onClick: () => alert('Go to Men\'s Wears'),
  },
  {
    title: 'Sport & Outdoors',
    image: '/sportAnOutdoorsBanner.png',
    imageBg: '#cce7e8', // sky blue - energetic
    onClick: () => alert('Go to Men\'s Wears'),
  },
  {
    title: 'kids Toys',
    image: '/kidsToysBanner.png',
    imageBg: '#fff3b0', // pastel yellow - playful
    onClick: () => alert('Go to Electronics'),
  },
  {
    title: 'Music & Instruments ',
    image: '/musicInstrumentsBanner.png',
    imageBg: '#e0d4f7', // soft purple - creative
    onClick: () => alert('Go to Electronics'),
  },
  {
    title: 'Accessories',
    image: '/accessoriesBanner.jpg',
    imageBg: '#f4d8cd', // soft coral beige - fashion
    onClick: () => alert('Go to Men\'s Wears'),
  },
  {
    title: 'Hotel & Resort',
    image: '/hotelRent.jpg',
    imageBg: '#dbeeff', // light blue - travel vibe
    onClick: () => alert('Go to Travel'),
  },
  {
    title: 'Air Tickets',
    image: '/airplaneBanner.jpg',
    imageBg: '#cce5ff', // cool sky blue
    onClick: () => alert('Go to Travel'),
  },
  {
    title: 'Train Tickets',
    image: '/trainBanner.jpg',
    imageBg: '#e8e8e8', // light gray - transport
    onClick: () => alert('Go to Travel'),
  },
  {
    title: 'eBooks',
    image: '/ebook.jpg',
    imageBg: '#fff2d8', // parchment yellow - bookish
    onClick: () => alert('Go to eBooks'),
  },
  {
    title: 'Electronics',
    image: '/electronics-banner.webp',
    imageBg: '#d0e8f2', // icy blue - tech feel
    onClick: () => alert('Go to Electronics'),
  },
];


const CategoryGrid = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        {categories.map((category, index) => (
          <div key={index} className="col-md-6 col-sm-6 col-lg-3 mb-4">
        <Link to={`/category/${category.title.toString().toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
            <div
              className="position-relative rounded overflow-hidden shadow-sm image-of-grid category-box"
              /*onClick={category.onClick}*/
              style={{ cursor: 'pointer' }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-100 category-image"
              />
              <div
                className="position-absolute top-0 start-0 w-100 text-white px-3 py-2 d-flex justify-content-between align-items-center title-categories"
                style={{
                  background: `linear-gradient(to right,${category.imageBg}, transparent, transparent)`,
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                }}
              >
                <span>{category.title}</span>
                <span className="arrow-icon">
                  <i className="bi bi-arrow-right-short fs-5"></i>
                </span>
              </div>
            </div>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
