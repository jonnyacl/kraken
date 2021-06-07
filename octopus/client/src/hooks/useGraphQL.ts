import axios from "axios";
import { useEffect, useState } from "react";

export const useGraphQL = (productId: number) => {
    const [response, setResponse] = useState<any | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);

    const graphUrl = 'http://localhost:8000/graphql';
    const opName = "getProductById";
    const query = `query getProductById {\n product(productId: ${productId}) {\n id\n name\n power\n description\n price\n quantity\n brand\n weight\n height\n width\n length\n modelCode\n colour\n imgUrl\n }\n}\n`;
    useEffect(() => {
        if (!fetched) {
            setLoading(true);
            axios.post(graphUrl, {
                operationName: opName,
                query,
                variables: null,

            }).then(r => {
                setResponse(r.data);
                setLoading(false);
            }).catch(e => {
                console.error('err', e);
                setLoading(false);
            });
            setFetched(true);
        }
    }, [fetched, query]);
    return { response, loading };
};