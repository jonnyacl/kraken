import React from 'react';
import basket from "../images/basket.svg";

const Header = () => {
  return (
    <header>
      <div className="octopus-header">
        <div className="name">
          octopus energy
        </div>
        <div className="sidebar">
          <img src={basket} alt="basket" />
        </div>

      </div>
    </header>
  );
}

export default Header;
