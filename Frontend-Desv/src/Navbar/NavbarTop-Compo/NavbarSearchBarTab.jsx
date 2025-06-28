import imageBg from '/peakpx-navbar-bg.jpg';

export default function NavbarSearchBarTab({ selectedFilter }) {
  return (
    <div className="navbar-search-outer-parent">
      <div
        className="navbar-floating-bg"
        style={{
          backgroundImage: `url(${imageBg})`,
          filter: selectedFilter?.imageFilter || 'grayscale(1) brightness(4) contrast(1.2)',
          transition: 'all cubic-bezier(.01,.59,.48,.98) .5s'
        }}
      ></div>
    
      <div className="navbar-search-inner-parent">
        <label htmlFor=""><i className="bi bi-search text-white"></i></label>
        <input type="text" placeholder="Search a Food or a Flower..." className="nav-search" />
      </div>
    </div>

  );
}
