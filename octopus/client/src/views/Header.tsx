import React from 'react';
import basket from "../images/basket.svg";
import title from "../images/title.svg";

const Header = () => {
  return (
    <header>
      <div className="name">
        <img src={title} alt="name" />
      </div>
      <div className="sidebar">
        <img src={basket} alt="basket" />
      </div>
    </header>
  );
}

export default Header;
