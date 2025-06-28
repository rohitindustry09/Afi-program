import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-white text-muted border-top pt-5 pb-3">
      <div className="container">
        <div className="row text-start">
          {/* Brand */}
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <h5 className="fw-bold text-primary">Bloom<span className="text-danger">Bites</span></h5>
            <p className="small">Everything for special one which can be gifted by you. </p>
            <div className="d-flex gap-2">
              <a href="#"><i className="bi bi-facebook fs-5 text-muted"></i></a>
              <a href="#"><i className="bi bi-instagram fs-5 text-muted"></i></a>
              <a href="#"><i className="bi bi-twitter fs-5 text-muted"></i></a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Categories</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none">All Flowers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">All Food</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Best Sellers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">New Arrivals</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Shoes</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Electronics</a></li>
            </ul>
          </div>

          {/* Help */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Help</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Shipping Info</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-muted text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="#" className="text-muted text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 mb-2" />
        <p className="text-center small mb-0">&copy; {new Date().getFullYear()} BloomBites. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
