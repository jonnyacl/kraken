import React, { useReducer } from 'react';
import { BasketContext } from './context/BasketContext';
import { BasketReducer } from './reducer/BasketReducer';
import { Basket } from './views/Basket';

function App() {
  const [basketState, basketDispatch] = useReducer(BasketReducer, { items: [] });
  return (
    <BasketContext.Provider value={{ basket: basketState, basketDispatch }}>
      <Basket />
    </BasketContext.Provider>
  );
}

export default App;
