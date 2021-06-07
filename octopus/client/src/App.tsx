import { useEffect, useReducer } from 'react';
import { BasketContext } from './context/BasketContext';
import { ProductContext } from './context/ProductContext';
import { BasketReducer } from './reducer/BasketReducer';
import { ProductReducer } from './reducer/ProductReducer';
import { Basket } from './views/Basket';
import Footer from './views/Footer';
import Header from './views/Header';

function App() {
  const [basketState, basketDispatch] = useReducer(BasketReducer, { items: [], showCart: false });
  const [productState, productsDispatch] = useReducer(ProductReducer, {
    products: []
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
