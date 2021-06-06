import { Basket, BasketItem } from "../state";

export interface BasketAction {
    type: string,
    data: BasketItem,
}

export const BasketReducer = (state: Basket, action: BasketAction) => {
    const { data } = action;
    const existingItems = state.items.filter(i => i.id === data.id);
    const allItems = state.items.filter(i => i.id !== data.id);
    let updatedItems;
    console.log('BASKET REDUCER', action);
    switch (action.type) {
        case 'ITEMS_ADDED':
            if (existingItems.length) {
                updatedItems = existingItems[0];
                updatedItems.quantity = updatedItems.quantity + data.quantity;
            } else {
                updatedItems = data;
            }
            allItems.push(updatedItems);
            return {
                showCart: true,
                items: allItems,
            };
        case 'ITEMS_REMOVED':
            if (existingItems.length) {
                updatedItems = existingItems[0];
                updatedItems.quantity = updatedItems.quantity + data.quantity;
                allItems.push(updatedItems);
                return {
                    showCart: true,
                    items: allItems,
                };
            } else {
                console.error('Nothing to remove');
                return state;
            }
        case "ITEMS_CLEARED":
            return {
                showCart: true,
                items: [],
            };
        default:
            console.error('Invalid action type', action.type);
            return state;
    }
};