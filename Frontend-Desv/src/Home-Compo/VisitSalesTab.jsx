import './VisitSalesTab.css'

export default function VisitSalesTab({ setImage, setDiscount }) {
  return (
    <>
      <div className="outer-image-sales-outer">
        <h3> {setDiscount}% </h3>
        <div className="image-sales-outer">
          <img src={setImage} />
          <div className="more-btn">
            <button> Buy with More </button>
          </div>
        </div>
      </div>
    </>
  );
}