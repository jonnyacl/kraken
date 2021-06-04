import React, { useState, useContext } from 'react';
import Quantity from '../components/Quantity';
import CartButton from '../components/CartButton';
import { BasketContext } from '../contexts/BasketContext';

const Cart = ({itemId, item, price, currency}) => {

  const [basketState, dispatch] = useContext(BasketContext);
  const basketItem = basketState[itemId];

  const [count, setCount] = useState(1);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    setShowCart(true);
    console.log(`Adding ${count} ${item}s to Cart for ${currency}${price * count}`);
    dispatch({
        type: "ADDED_TO_BASKET",
        count,
        itemId,
        price,
        currency
    });
    setCount(1);
  }
  const priceParts = price.toString().split(".");
  const pounds = priceParts[0];
  let pence;
  if (priceParts.length === 2) {
    pence = priceParts[1];
  }

  return (
    <div className="App-item-cart">
      <div className="pricerow">
        <div className="pounds">{currency}{pounds}</div>
        <div className="pence">.{pence}</div>
        <Quantity
            count={count}
            onAdd={() => setCount(count + 1)}
            onMinus={count > 1 ? () => setCount(count - 1) : () => {console.log("Cannot go below 1")}}
        />
      </div>
      <CartButton onClick={() => handleAddToCart()}/>
      {basketItem && showCart ?
        <div>
          <div>Cart: Count: {basketItem.count} Price: {basketItem.currency}{basketItem.price}</div>
          <button className="emptyCart" onClick={() => {dispatch({type: "REMOVE_FROM_BASKET", itemId })}}>Empty Cart</button>
          <button className="emptyCart" onClick={() => setShowCart(false)}>Hide</button>
        </div>
        : <div>
            <button className="emptyCart" onClick={() => setShowCart(true)}>Show Cart</button>
          </div>
      }
    </div>
  );
}

export default Cart;
