import React, { useRef, useState } from 'react';
import './All.css';

const filters = [
  {
    label: 'Flowers',
    background: '#FF5C8D',
    textColor: '#ffffff',
    borderColor: '#E04A74',
    imageFilter: 'hue-rotate(330deg) saturate(1.5) brightness(1.1)'
  },
  {
    label: 'Groceries',
    background: '#32D16D',
    textColor: '#ffffff',
    borderColor: '#29B45E',
    imageFilter: 'hue-rotate(170deg) saturate(1.5) brightness(1.1)'
  },
  {
    label: 'Electronics',
    background: '#3BB3FF',
    textColor: '#ffffff',
    borderColor: '#2196F3',
    imageFilter: 'hue-rotate(230deg) saturate(1.4) brightness(1.05)'
  },
  {
    label: 'eBooks',
    background: '#FFA53B',
    textColor: '#ffffff',
    borderColor: '#E6902E',
    imageFilter: 'hue-rotate(80deg) saturate(1.4) brightness(1.1)'
  },
  {
    label: 'Clothing',
    background: '#8E44AD',
    textColor: '#ffffff',
    borderColor: '#732D91',
    imageFilter: 'hue-rotate(290deg) saturate(1.3) brightness(1.05)'
  },
  {
    label: 'Toys',
    background: '#FFCD3C',
    textColor: '#242424',
    borderColor: '#F4B400',
    imageFilter: 'hue-rotate(125deg) saturate(1.4) brightness(1.15)'
  },
  {
    label: 'Home Decor',
    background: '#FF8B94',
    textColor: '#ffffff',
    borderColor: '#E57A84',
    imageFilter: 'hue-rotate(350deg) saturate(1.4) brightness(1.1)'
  },
  {
    label: 'Fitness',
    background: '#26C6DA',
    textColor: '#ffffff',
    borderColor: '#00ACC1',
    imageFilter: 'hue-rotate(160deg) saturate(1.3) brightness(1.05)'
  },
  {
    label: 'Books',
    background: '#6C5CE7',
    textColor: '#ffffff',
    borderColor: '#5A4BCF',
    imageFilter: 'hue-rotate(260deg) saturate(1.3) brightness(1.05)'
  },
  {
    label: 'Beauty',
    background: '#FF6F61',
    textColor: '#ffffff',
    borderColor: '#E65A50',
    imageFilter: 'hue-rotate(10deg) saturate(1.4) brightness(1.1)'
  },
  {
    label: 'Music',
    background: '#00B894',
    textColor: '#ffffff',
    borderColor: '#00997A',
    imageFilter: 'hue-rotate(190deg) saturate(1.4) brightness(1.1)'
  }
];


const FilterCarousel = ({ setSelectedFilter }) => {
  const scrollRef = useRef(null);

  const scrollByOffset = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  const handleFilterBClick = (element) => {
    const clickedClassBtn = element.target.className;
    
    const selectedClass = filters.find((item)=> clickedClassBtn.includes(item.label));
     // Reset all filter buttons
    $('[data-label]').css({
      backgroundColor: '#fff',
      color: '#242424',
    });
    //set
    $(`[data-label='${selectedClass.label}']`).css({
      backgroundColor: selectedClass.background,
      color: selectedClass.textColor,
      borderColor: selectedClass.borderColor
    });
    
    document.documentElement.style.setProperty('--elementsFontsColor', selectedClass.background);
    setTimeout(function() {
       document.querySelector('meta[name="theme-color"]')?.setAttribute('content', selectedClass.borderColor);
     }, 1);
     setTimeout(()=> {
       setSelectedFilter(selectedClass);
     }, 600)
  }
  
  return (
   <div className="filter-carousel-wrapper-outer">
    <div className="filter-carousel-wrapper px-3 py-3">
      <button
        className="scroll-btn left"
        onClick={() => scrollByOffset(-160)}
      >
        ‹
      </button>
      <div className="d-flex overflow-auto gap-2 filter-carousel" ref={scrollRef}>
        {filters.map((item, i) => (
          <button
            key={i}
            data-label={item.label}
            className={`btn ${item.label} px-4 py-2 rounded-pill flex-shrink-0`}
            style={{
              background: '#fff',
              border: `1px solid ${item.borderColor}`,
              color: '#242424'
            }} 
            onClick={handleFilterBClick}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button
        className="scroll-btn right"
        onClick={() => scrollByOffset(160)}>
        ›
      </button>
    </div>
   </div>
  );
};

export default FilterCarousel;
