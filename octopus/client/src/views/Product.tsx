import React from 'react';
import Cart from './Cart';
import Description from './Description';
import Specs from './Specs';
import bulb from '../assets/bulb.png'
import { Product } from '../state';

const ProductView = (product: Product) => {

  return (
    <div className="App-item">
      <div className="image">
        <img src={bulb} alt="bulb"></img>
      </div>
      <div className="title">
        {product.name}
      </div>
      <div className="description">
        {product.description}
      </div>
      <Cart itemId={product.id} item={product} price={product.price} currency="£" />
      <Description
        text={product.description}
      />
      <Specs product={product} />
    </div>
  );
}

export default ProductView;
