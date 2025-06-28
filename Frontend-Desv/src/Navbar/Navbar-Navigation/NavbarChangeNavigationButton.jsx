export default function NavbarChangeNavigationButton({ handleClickMethod, flowerOrFoodClick, buttonTitle, buttonBgColor, buttonTextColor, FlowerOrFoodIcons }) {
  return (
    <div className="flower-navigation-tab navigation-tabs">
      <button onClick={handleClickMethod} style={{
        background: flowerOrFoodClick ? buttonBgColor.true : buttonBgColor.false,
        color: flowerOrFoodClick ? buttonTextColor.true : buttonTextColor.false,
      }} className="btn">
          <i>{buttonTitle}</i>
          <span className="icon">
            <i className={FlowerOrFoodIcons}></i>
          </span>
      </button>
    </div>
  );
}