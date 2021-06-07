import { Product, ProductState } from "../state";

export interface ProductAction {
    type: string,
    data: Product[],
}

export const ProductReducer = (state: ProductState, action: ProductAction) => {
    const { data } = action;
    console.log('PRODUCT REDUCER', action);
    switch (action.type) {
        case 'PRODUCTS_FETCHED':
            console.log('data', data);
            return {
                products: data,
            }
        default:
            console.error('Invalid action type', action.type);
            return state;
    }
};