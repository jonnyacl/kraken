import React, { useEffect, useReducer } from 'react';
import { BasketContext } from './context/BasketContext';
import { ProductContext } from './context/ProductContext';
import { BasketReducer } from './reducer/BasketReducer';
import { ProductReducer } from './reducer/ProductReducer';
import { Basket } from './views/Basket';
import Footer from './views/Footer';
import Header from './views/Header';

function App() {
  const [basketState, basketDispatch] = useReducer(BasketReducer, { items: [] });
  const [productState, productsDispatch] = useReducer(ProductReducer, {
    products: [
      {
        "id": "1",
        "name": "Energy saving light bulb",
        "power": "25W",
        "description": "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
        "price": 1299,
        "quantity": 4,
        "brand": "Philips",
        "weight": 77,
        "height": 12.6,
        "width": 6.2,
        "length": 6.2,
        "modelCode": "E27 ES",
        "colour": "Cool daylight",
        "imgUrl": "https://i.ibb.co/2nzwxnQ/bulb.png"
      }
    ]
  });
  useEffect(() => {
    document.title = "Octopus Basket";
  })
  return (
    <ProductContext.Provider value={{ productState, productsDispatch }}>
      <BasketContext.Provider value={{ basket: basketState, basketDispatch }}>
        <div className="octopus">
          <Header />
          <Basket />
          <Footer />
        </div>
      </BasketContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
