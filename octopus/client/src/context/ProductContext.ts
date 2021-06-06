import React, { createContext } from "react";
import { ProductAction } from "../reducer/ProductReducer";
import { ProductState } from "../state";

const ProductContext = createContext<{ productState: ProductState, productsDispatch: React.Dispatch<ProductAction> }>({ productState: { products: [] }, productsDispatch: () => undefined });

export { ProductContext };