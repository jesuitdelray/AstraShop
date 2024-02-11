import { StateSchema } from "app/providers/StoreProvider"

export const getBasketProducts = (state: StateSchema) => state.basket.products

export const getBasketProductQuantityById = (id: number) => (state: StateSchema) =>
    state.basket.products?.filter(item => item.id === id)[0].quantity

export const getBasketProductsTotalPrice = (state: StateSchema) =>
    state.basket.products
        ?.map(item => item.price * (item.quantity || 1))
        .reduce((acc: number, val: number) => acc + val, 0)

export const getBasketProductsTotalQuantity = (state: StateSchema) =>
    state.basket.products
        ?.map(item => item.quantity || 1)
        .reduce((acc: number, val: number) => acc + val, 0)
