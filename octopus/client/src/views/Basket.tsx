import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useGraphQL } from "../hooks/useGraphQL";
import ProductView from "./Product";

export const Basket = () => {
    const [productIndex, setProductIndex] = useState<number>(0);
    const { productState, productsDispatch } = useContext(ProductContext);
    const product = productState.products[productIndex];

    const { response: basketResponse, loading: basketLoading } = useGraphQL(1);

    useEffect(() => {
        if (basketResponse?.data?.product) {
            console.log(basketResponse.data);
            productsDispatch({ type: 'PRODUCTS_FETCHED', data: [basketResponse.data.product] });
        }
    }, [basketResponse, productsDispatch]);

    if (product) {
        return (
            <ProductView product={product} onChangeProduct={(index: number) => setProductIndex(index)} />
        );
    }
    if (basketLoading) {
        return <div className="loading">Loading...</div>
    }
    return (
        <div className="loading"><h2>Failed to find products</h2></div>
    );
};