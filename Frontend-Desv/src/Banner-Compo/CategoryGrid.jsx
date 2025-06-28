import React from 'react';
import './All.css'; // Optional for custom styles
import imageLotus2nd from '/Flowers/lotus_2nd.jpg'

const flowerCategories = [
  {
    title: 'ANNIVERSARY',
    image: imageLotus2nd,
  },
  {
    title: 'BIRTHDAY',
    image: imageLotus2nd,
  },
  {
    title: 'GIFTS FOR MEN',
    image: imageLotus2nd,
  },
  {
    title: 'GRAND GESTURES',
    image: imageLotus2nd,
  },
  {
    title: 'FLOWERS IN A VASE',
    image: imageLotus2nd,
  },
  {
    title: 'SUBSCRIPTION',
    image: imageLotus2nd,
  },
];

const CategoryGrid = () => {
  return (
    <div className="container my-4">
      <div className="row g-3">

        {/* First Image: Big Block on PC, full-width on phone */}
        <div className="col-12 col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <img src={flowerCategories[0].image} alt={flowerCategories[0].title} className="card-img-top" />
            <div className="card-body text-center bg-light">
              <h6 className="card-title text-uppercase m-0">{flowerCategories[0].title}</h6>
            </div>
          </div>
        </div>

        {/* Next 2 Images: Stack vertically on PC, full-width on phone */}
        <div className="col-12 col-md-6 d-flex flex-md-column gap-3">
          {[1, 2].map((i) => (
            <div className="card flex-fill border-0 shadow-sm w-100" key={i}>
              <img src={flowerCategories[i].image} alt={flowerCategories[i].title} className="card-img-top" />
              <div className="card-body text-center bg-light">
                <h6 className="card-title text-uppercase m-0">{flowerCategories[i].title}</h6>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width Image */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <img src={flowerCategories[3].image} alt={flowerCategories[3].title} className="card-img-top" />
            <div className="card-body text-center bg-light">
              <h6 className="card-title text-uppercase m-0">{flowerCategories[3].title}</h6>
            </div>
          </div>
        </div>

        {/* Last 2 images: 2-column layout on PC, stacked on mobile */}
        {[4, 5].map((i) => (
          <div className="col-12 col-md-6" key={i}>
            <div className="card border-0 shadow-sm">
              <img src={flowerCategories[i].image} alt={flowerCategories[i].title} className="card-img-top" />
              <div className="card-body text-center bg-light">
                <h6 className="card-title text-uppercase m-0">{flowerCategories[i].title}</h6>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CategoryGrid;
