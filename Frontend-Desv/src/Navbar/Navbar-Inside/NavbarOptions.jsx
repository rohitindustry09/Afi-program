import { useState, useEffect } from 'react';

export default function NavbarOptions({ optionTitle }) {
  const [hambugerOptionsClick, setHambugerOptionsClick] = useState(false);
  
  function handleHamburgerOptions() {
    setHambugerOptionsClick(!hambugerOptionsClick)
  }
  return (
    <ul>
      <li onClick={handleHamburgerOptions} >
          <span> {optionTitle} </span>
          <div class="hamburger-options-icon" style={{
            transform: `rotate(${hambugerOptionsClick ? '180deg' : '0deg'})`
          }}>
            <i class="bi bi-caret-down"></i>
          </div>
      </li>
    </ul>
  );
}