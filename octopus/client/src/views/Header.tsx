import { useContext, useState } from 'react';
import { BasketContext } from '../context/BasketContext';
import { ProductContext } from '../context/ProductContext';
import basketImage from "../images/basket.svg";
import title from "../images/title.svg";

const Header = () => {
  const { basket, basketDispatch } = useContext(BasketContext);
  const { productState } = useContext(ProductContext);
  const basketItems = basket.items;
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
      <div className="sidebar" onClick={() => setShowCart(!showCart)}>
        <img src={basketImage} alt="basket" />
        {basketCount > 0 && <div className="count">{basketCount}</div>}
      </div>
      <div className={showCart ? "modal-shown" : "modal-hidden"}>
        <div className="content">
          <div>Basket</div>
          {basketItems && <ul>
            {basketItems.map(b => {
              const prods = productState.products.filter(p => p.id === b.id);
              if (prods?.length) {
                const prod = prods[0];
                return (<li key={prod.id}>{prod.name}: qty {b.quantity} - £{(prod.price * b.quantity) / 100}</li>)
              }
              return null;
            })}
          </ul>}
          {basketCount > 0 ? <button className="emptyCart" onClick={() => { basketDispatch({ type: "ITEMS_CLEARED", data: { id: "", quantity: 0 } }) }}>Clear</button> : <div>Empty</div>}
          <div className="close">
            <span onClick={() => setShowCart(false)}>Close</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
