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

  const { basketDispatch } = useContext(BasketContext);
  const { productState } = useContext(ProductContext);
  const basketProduct = productState.products.filter(p => p.id === productId)[0];

  const [count, setCount] = useState(1);

  const handleAddToCart = () => {
    console.log(`Adding ${count} ${basketProduct.name}s to Cart for ${currency}${price * count}`);
    basketDispatch({
      type: "ITEMS_ADDED",
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
    </div>
  );
}

export default Cart;
