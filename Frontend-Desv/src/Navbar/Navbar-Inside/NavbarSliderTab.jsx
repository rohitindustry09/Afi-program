import NavbarOptions from './NavbarOptions.jsx';
import './NavbarSliderTab.css';

export default function NavbarSliderTab({ hambugerClick, transformTriggered }) {
  return (
  <div className="slider-overlay" style={{
    width: hambugerClick ? '100vw' : '0'
  }}>
    <div className="slider-menu" style={{
      right: transformTriggered ? '0' : '-100vw',
      boxShadow: transformTriggered ? '-20px 20px 0 var(--elementsFontsColor)' : '-100px -10px 0 var(----elementsFontsColor)'
    }}>
      <h2>Where <span className="toGo">toGo?</span></h2>
      <NavbarOptions optionTitle="Home" />
      <NavbarOptions optionTitle="Shop by Category" />
      <NavbarOptions optionTitle="Shopping Cart" />
      <NavbarOptions optionTitle="Promotions & Deals" />
      <NavbarOptions optionTitle="Customer Support" />
    </div>
  </div>
  );
}