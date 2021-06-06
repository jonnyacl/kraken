import React, { useContext, useState } from 'react';
import { BasketContext } from '../context/BasketContext';
import { ProductContext } from '../context/ProductContext';
import basketImage from "../images/basket.svg";
import title from "../images/title.svg";

const Header = () => {
  const { basket, basketDispatch } = useContext(BasketContext);
  const { productState } = useContext(ProductContext);
  const basketItems = basket.items;
  console.log('products', productState.products);
  console.log('items', basketItems);
  let basketCount = 0;
  let basketPrice = 0;
  basketItems.forEach(b => {
    basketCount = basketCount + b.quantity;
    const prod = productState.products.filter(p => p.id === b.id);
    let prodPrice = 0;
    if (prod?.length) {
      prodPrice = prod[0].price * b.quantity;
    }
    basketPrice = basketPrice + prodPrice;
  });

  const [showCart, setShowCart] = useState(false);

  return (
    <header>
      <div className="name">
        <img src={title} alt="name" />
      </div>
      <div className="sidebar">
        <img src={basketImage} alt="basket" onClick={() => setShowCart(!showCart)} />
      </div>
      {basketItems && showCart &&
        <div className="cart-modal">
          <div>{basketCount} items £{basketPrice / 100}</div>
          {basketCount > 0 && <button className="emptyCart" onClick={() => { basketDispatch({ type: "ITEMS_CLEARED", data: { id: "", quantity: 0 } }) }}>Empty</button>}
        </div>
      }
    </header>
  );
}

export default Header;
