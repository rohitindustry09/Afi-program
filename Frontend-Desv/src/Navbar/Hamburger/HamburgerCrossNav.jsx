import { useState, useEffect } from 'react'

export default function HamburgerCrossNav({ handleHamburger, hambugerClick, transformTriggered, hamburgerTransTrigg }) {
    const [defineNoClick, setDefineNoClick] = useState("");
  /*  const [defaultPosition, setDefaultPosition]= useState({ top: 0, right, 0 });
    const [resetDragAfter, setResetDragAfter]= useState(2);
    const hambugerButtonRef = null;*/
    
    
    useEffect(()=>{
      if (hambugerClick) {
        setDefineNoClick("no-click");
        setTimeout(function() {
          setDefineNoClick("");
        }, 1500);
      }
    }, [hambugerClick])
  return (
    <div 
     
     className={`hamburger-parent-outer ${defineNoClick}`} onClick={handleHamburger} 
      style={{
        boxShadow: hambugerClick ? '2px -2px 5px black' : '2px 2px 5px black',
        right: transformTriggered ? '86%' : '5%'
    }}>
      <div className="hamburger-parent"
        style={{
          transform: `translate(${hamburgerTransTrigg ? '-22px'
          : '22px'}, 2px)`,
      }}>

        <div> <i class="bi bi-list"></i> </div>
        <div> <i class="bi bi-x"></i> </div>
      </div>
    </div>
  );
}