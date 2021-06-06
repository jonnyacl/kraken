export interface Basket {
    items: BasketItem[],
    showCart: boolean,
}

export interface ProductState {
    products: Product[],
}

export interface BasketItem {
    id: string,
    quantity: number,
}

export interface Product {
    id: string,
    name: string,
    power: string,
    description: string,
    price: number,
    quantity: number,
    brand: string,
    weight: number,
    height: number,
    width: number,
    length: number,
    modelCode: string,
    colour: string,
    imgUrl: string,
}
