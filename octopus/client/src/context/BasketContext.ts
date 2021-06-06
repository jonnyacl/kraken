import React, { createContext } from "react";
import { BasketAction } from "../reducer/BasketReducer";
import { Basket } from "../state";

const BasketContext = createContext<{ basket: Basket, basketDispatch: React.Dispatch<BasketAction> }>({ basket: { items: [], showCart: false }, basketDispatch: () => undefined });

export { BasketContext };