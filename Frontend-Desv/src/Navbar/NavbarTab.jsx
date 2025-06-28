import { useState, useEffect } from 'react';
import './NavbarTab.css'
import NavbarSearchBarTab from './NavbarTop-Compo/NavbarSearchBarTab.jsx';
import NavbarSliderTab from './Navbar-Inside/NavbarSliderTab.jsx';
import NavbarChangeNavigationTab from './Navbar-Navigation/NavbarChangeNavigationTab.jsx';
import HamburgerCrossNav from './Hamburger/HamburgerCrossNav.jsx'
import FilterCarousel from '../Banner-Compo/FilterCarousel';
import { useLocation } from 'react-router-dom'

export default function NavbarTab() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [hambugerClick, setHambugerClick] = useState(false);
  const [transformTriggered, setTransformTriggered] = useState(false);
  const [hamburgerTransTrigg, setHamburgerTransTrigg] = useState(false);
  /*hide mav navigation*/ 
  const location = useLocation();
  const hideNavigatiomBar = location.pathname.startsWith('/show') || location.pathname.startsWith('/details') || location.pathname.startsWith('/');
  
  const handleFlowerClick = (element)=> {
    setFlowerClick(true)
    setFoodClick(false)
  }
  const handleFoodsClick = ()=> {
    setFoodClick(true)
    setFlowerClick(false)
  }
  
  /*useEffect(()=>{
    let color;
    if (flowerClick) {
     document.documentElement.style.setProperty('--elementsFontsColor', 'lightgreen');
     document.documentElement.style.setProperty('--elementsShadowColor', '#a658ff');
     color = getComputedStyle(document.documentElement).getPropertyValue('--elementsFontsColor').trim();
     
     setTimeout(function() {
       document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
     }, 1);
     
    }
    else if (foodClick) {
    document.documentElement.style.setProperty('--elementsFontsColor', '#ff533c');
    document.documentElement.style.setProperty('--elementsShadowColor', '#19ffda');
    color = getComputedStyle(document.documentElement).getPropertyValue('--elementsFontsColor').trim();
    
    setTimeout(function() {
       document.querySelector('meta[name="theme-color"]')?.setAttribute('content', color);
     }, 1);
  
    }
    
  }, [selectedFilter]);*/
  
  useEffect(() => {
   document.body.classList.toggle('no-scroll', hambugerClick);
  }, [hambugerClick]);


  function handleHamburger() {
    setHambugerClick(!hambugerClick)
    setTimeout(() => {
      setTransformTriggered(!transformTriggered)
    }, 600);
    setTimeout(() => {
      setHamburgerTransTrigg(!hamburgerTransTrigg)
    }, 1100);
  }

  return (
    <>
     
     <NavbarSearchBarTab selectedFilter={selectedFilter}/>
  
      {/*navigation flower or food*/}
      {
      /*
      &&
        <NavbarChangeNavigationTab 
          handleFlowerMethod={handleFlowerClick}
          handleFoodMethod={handleFoodsClick}
          flowerClick={flowerClick} 
          foodsClick={foodClick}
        />*/
      }
      {
        !hideNavigatiomBar &&
         <FilterCarousel setSelectedFilter={setSelectedFilter}
         />
      }
     <HamburgerCrossNav 
       handleHamburger={handleHamburger}
       hambugerClick={hambugerClick}
       transformTriggered={transformTriggered}
       hamburgerTransTrigg={hamburgerTransTrigg}
     />

     <NavbarSliderTab 
       hambugerClick={hambugerClick} 
       transformTriggered={transformTriggered} 
     />
   
    </>
  );
}