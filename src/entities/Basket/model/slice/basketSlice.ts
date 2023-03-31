import { createSlice } from "@reduxjs/toolkit"
import { BasketSchema } from "../types/basketSchema"

const initialState: BasketSchema = {
    products: [],
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, { payload }) => {
            state.products.push(payload)
        },
        removeFromBasket: (state, { payload }) => {
            state.products = state.products.filter((product: any) => product.id !== payload)
        },
        incrementInBasket: (state, { payload }) => {
            state.products = state.products.map((product: any) => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity ? product.quantity + 1 : 1,
                    }
                }
                return product
            })
        },
        decrementInBasket: (state, { payload }) => {
            state.products = state.products.map((product: any) => {
                if (product.id === payload) {
                    return {
                        ...product,
                        quantity:
                            product.quantity && product.quantity > 1 ? product.quantity - 1 : 1,
                    }
                }
                return product
            })
        },
    },
})

export const { reducer: basketReducer, actions: basketActions } = basketSlice
