import React, { useState, useContext } from 'react';
import Quantity from '../components/Quantity';
import CartButton from '../components/CartButton';
import { BasketContext } from '../context/BasketContext';
import { ProductContext } from '../context/ProductContext';

type CartProps = {
  productId: string,
  price: number,
  currency: string,
};

const Cart = ({ productId, price, currency = "GBP" }: CartProps) => {

  const { basket, basketDispatch } = useContext(BasketContext);
  const { productState } = useContext(ProductContext);
  const basketProduct = productState.products.filter(p => p.id === productId)[0];
  const basketItem = basket.items.filter(b => b.id === productId)[0];

  const [count, setCount] = useState(1);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = () => {
    setShowCart(true);
    console.log(`Adding ${count} ${basketProduct.name}s to Cart for ${currency}${price * count}`);
    basketDispatch({
      type: "ADDED_TO_BASKET",
      data: {
        id: productId,
        quantity: count,
      }
    });
    setCount(1);
  }
  const priceParts = (price / 100).toString().split(".");
  const pounds = priceParts[0];
  let pence;
  if (priceParts.length === 2) {
    pence = priceParts[1];
  }

  return (
    <div className="cart">
      <div className="pricerow">
        <div className="pounds">{currency}{pounds}</div>
        <div className="pence">.{pence}</div>
        <Quantity
          count={count}
          onAdd={() => setCount(count + 1)}
          onMinus={count > 1 ? () => setCount(count - 1) : () => { console.log("Cannot go below 1") }}
        />
      </div>
      <CartButton onClick={() => handleAddToCart()} />
      {basketProduct && showCart ?
        <div>
          <div>Cart: Count: {basketItem.quantity} Price: {currency}{basketProduct.price}</div>
          <button className="emptyCart" onClick={() => { basketDispatch({ type: "ITEMS_CLEARED", data: { id: productId, quantity: 0 } }) }}>Empty Cart</button>
          <button className="emptyCart" onClick={() => setShowCart(false)}>Hide</button>
        </div>
        :
        <span className="emptyCart" onClick={() => setShowCart(true)}>Show Cart</span>
      }
    </div>
  );
}

export default Cart;
