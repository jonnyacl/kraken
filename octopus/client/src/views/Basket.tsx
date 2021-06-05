import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useGraphQL } from "../hooks/useGraphQL";
import ProductView from "./Product";

export const Basket = () => {
    const [productIndex, setProductIndex] = useState<number>(0);
    const { productState, productsDispatch } = useContext(ProductContext);
    const product = productState.products[productIndex];

    const { loading: basketLoading } = useGraphQL((response: any) => productsDispatch({ type: "PRODUCTS_FETCHED", data: response }));

    if (basketLoading) {
        return <div>Loading...</div>
    }
    if (product) {
        return (
            <ProductView product={product} onChangeProduct={(index: number) => setProductIndex(index)} />
        );
    }
    return (
        <h2>Failed to find products</h2>
    );
};