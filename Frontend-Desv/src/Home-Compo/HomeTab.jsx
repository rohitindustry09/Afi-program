import imageLotus2nd from '/Flowers/lotus_2nd.jpg'
import VisitSalesTab from './VisitSalesTab.jsx';
import ProductCards from '../Product-Compo/ProductCards.jsx'
import BannerTab from '../Banner-Compo/BannerTab';
import CategoryGrid from '../Banner-Compo/CategoryGrid';
import DailyDealsCarousel from '../Banner-Compo/DailyDealsCarousel';
import './HomeTab.css'

export default function HomeTab() {
  return (
    <>
     <div className="">
        <h2 className="headings"> Most Loved </h2>
        <div className="image-outer-holder">
          <div className="scroll-track">
            {[...Array(2)].flatMap(() =>
              [1, 2, 3, 4].map((_, i) => (
                <div className="image-outer" key={`img-${i}-${Math.random()}`}>
                  <img src={imageLotus2nd} className="image-we-scroll" />
                </div>
              ))
            )}
          </div>
        </div>
        
        <BannerTab />
        {/* <CategoryGrid />*/}
        <DailyDealsCarousel />
        
        <h2 className="headings"> Products Live </h2>
        <ProductCards />
       
    {/*   
       <h2 className="headings"> Demanded Sales Live </h2>
       <VisitSalesTab setImage={imageLotus2nd} setDiscount="45"/>
       <VisitSalesTab setImage={imageLotus2nd} setDiscount="36"/>
       <VisitSalesTab setImage={imageLotus2nd} setDiscount="57"/>  */}
        
     </div>
    </>
  );
}