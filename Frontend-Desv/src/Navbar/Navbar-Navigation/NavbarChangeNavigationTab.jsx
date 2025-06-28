import NavbarChangeNavigationButton from './NavbarChangeNavigationButton.jsx';

export default function NavbarChangeNavigationTab({ handleFlowerMethod, handleFoodMethod, flowerClick, foodsClick }) {
  return (
    <nav style={{
      position: 'sticky',
      top: '0',
      background: '#fff',
      zIndex: '100'
    }}>
      
    <div className="navigation-tab-parent">
      <NavbarChangeNavigationButton 
       handleClickMethod={handleFlowerMethod}
       flowerOrFoodClick={flowerClick}
       buttonTitle="Flowers"
       buttonBgColor={{ true: '#29db00', false: '#edffe8' }}
       buttonTextColor={{ true: '#fff', false: '#1a1a1a' }}
       FlowerOrFoodIcons="bi bi-flower3"
      />
      <NavbarChangeNavigationButton 
       handleClickMethod={handleFoodMethod}
       flowerOrFoodClick={foodsClick}
       buttonTitle="Foods"
       buttonBgColor={{ true: '#ff533c', false: '#ffe5e1' }}
       buttonTextColor={{ true: '#ffffff', false: '#1a1a1a' }}
       FlowerOrFoodIcons="bi bi-cup-straw"
      />
      
      </div>
    </nav>
  );
}