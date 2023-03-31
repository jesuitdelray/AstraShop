import { createSelector } from "@reduxjs/toolkit"
import { StateSchema } from "app/providers/StoreProvider"

export const getBasketProducts = (state: StateSchema) => state.basket.products
export const getBasketProductQuantityById = (id: any) => (state: StateSchema) =>
    state.basket.products.filter((item: any) => item.id === id)[0].quantity
