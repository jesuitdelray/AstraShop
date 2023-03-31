import { createSlice } from "@reduxjs/toolkit"
/* import { fetchProductDetails } from "../services/fetchProductDetails/fetchProductDetails" */
import { BasketSchema } from "../types/basketSchema"

const initialState: BasketSchema = {
    products: undefined,
    isLoading: false,
    error: undefined,
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.products.push(action.payload)
        },
    },
})

export const { reducer: basketReducer, actions: basketActions } = basketSlice
