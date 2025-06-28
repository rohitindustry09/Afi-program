import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import HomeTab from '../Home-Compo/HomeTab.jsx';
import { useSelector } from 'react-redux';
import axios from 'axios';

const categoryDetails = {
  flowers: {
    title: 'Flowers',
    banner: '/flower-banner.webp',
    color: '#ffe4e9', // matches imageBg
    items: ['Roses', 'Tulips', 'Bouquets'],
  },
  food: {
    title: 'Food',
    banner: '/food-banner.webp',
    color: '#e8f5e9',
    items: ['Organic Veggies', 'Dairy', 'Packaged Meals'],
  },
  petssupplies: {
    title: 'Pets Supplies',
    banner: '/petsSuppliesBanner.png',
    color: '#fdebd0',
    items: ['Dog Food', 'Toys', 'Beds'],
  },
  womenswears: {
    title: "Women's Wears",
    banner: '/womenWearBanner.png',
    color: '#f6e7f5',
    items: ['Dresses', 'Tops', 'Shoes'],
  },
  menswears: {
    title: "Men's Wears",
    banner: '/MensWearsBanner.png',
    color: '#dce3ea',
    items: ['Shirts', 'Jeans', 'Jackets'],
  },
  shoes: {
    title: 'Shoes',
    banner: '/shoes-banner.jpg',
    color: '#ff9d6c',
    items: ['Sneakers', 'Boots', 'Sandals'],
  },
  healthfitness: {
    title: 'Health & Fitness',
    banner: '/healthFitnessBanner.jpg',
    color: '#d4f4dd',
    items: ['Supplements', 'Workout Gear', 'Fitness Plans'],
  },
  sportoutdoors: {
    title: 'Sport & Outdoors',
    banner: '/sportAnOutdoorsBanner.png',
    color: '#cce7e8',
    items: ['Camping', 'Cycling', 'Outdoor Games'],
  },
  kidstoys: {
    title: 'Kids Toys',
    banner: '/kidsToysBanner.png',
    color: '#fff3b0',
    items: ['Stuffed Animals', 'Educational Toys', 'Games'],
  },
  musicinstruments: {
    title: 'Music & Instruments',
    banner: '/musicInstrumentsBanner.png',
    color: '#e0d4f7',
    items: ['Guitars', 'Keyboards', 'Drums'],
  },
  accessories: {
    title: 'Accessories',
    banner: '/accessoriesBanner.jpg',
    color: '#f4d8cd',
    items: ['Bags', 'Jewelry', 'Hats'],
  },
  hotelresort: {
    title: 'Hotel & Resort',
    banner: '/hotelRent.jpg',
    color: '#dbeeff',
    items: ['Luxury Hotels', 'Budget Stays', 'Resort Deals'],
  },
  airtickets: {
    title: 'Air Tickets',
    banner: '/airplaneBanner.jpg',
    color: '#cce5ff',
    items: ['Domestic Flights', 'International Flights', 'Charter Flights'],
  },
  traintickets: {
    title: 'Train Tickets',
    banner: '/trainBanner.jpg',
    color: '#ffae9c',
    items: ['Express Trains', 'Local Travel', 'Sleeper Coaches'],
  },
  ebooks: {
    title: 'eBooks',
    banner: '/ebook.jpg',
    color: '#fff2d8',
    items: ['Novels', 'Textbooks', 'Magazines'],
  },
  electronics: {
    title: 'Electronics',
    banner: '/electronics-banner.webp',
    color: '#d0e8f2',
    items: ['Mobiles', 'Laptops', 'Accessories'],
  },
};

const ViewCategoryTab = () => {
  const { category } = useParams();
  const BackendLink = useSelector((state)=> state.Link.BackendLink);
  const normalizedKey = category?.toLowerCase().replace(/[^a-z0-9]/g, '');
  const current = categoryDetails[normalizedKey];

  if (!current) return <div className="text-center py-5">Category not found</div>;
  
  useEffect(() => {
  const sendCategory = async () => {
    try {
      const result = await axios.get(`${BackendLink}/api/category`, { params: { category } });
      if (result) {
        alert(JSON.stringify(result.data));
      }
    } catch (error) {
      console.error('Error sending category:', error);
    }
  };

  sendCategory();
}, [BackendLink, category]);


  return (
    <div className="category-page" style={{ backgroundColor: current.color }}>
      <div className="container py-4">
        {/* Banner */}
        <div className="banner rounded shadow-sm overflow-hidden mb-4">
          <img src={current.banner} alt={current.title} className="w-100 rounded" />
          <h1 className="position-absolute top-0 start-0 m-3 text-white fw-bold fs-3 bg-dark bg-opacity-50 px-3 py-1 rounded">
            {current.title}
          </h1>
        </div>

        {/* Tabs */}
        <div className="d-flex gap-3 mb-4">
          {['Popular', 'Newest', 'Discounted'].map(tab => (
            <button key={tab} className="btn btn-outline-dark rounded-pill px-4">{tab}</button>
          ))}
        </div>

        {/* Carousel */}
        <Carousel interval={4000} indicators={false}>
          {current.items.map((item, idx) => (
            <Carousel.Item key={idx}>
              <div className="card border-0 shadow-sm text-center p-4">
                <h5>{item}</h5>
                <p className="text-muted">Sample product for {item}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Products */}
        <div className="row mt-5">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="col-6 col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <img src={current.banner} alt="" className="card-img-top object-fit-cover" style={{ height: '180px' }} />
                <div className="card-body">
                  <h6 className="card-title">Product {i + 1}</h6>
                  <p className="text-muted small">Short product description.</p>
                  <button className="btn btn-sm btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      
      <HomeTab />
    </div>
  );
};

export default ViewCategoryTab;
