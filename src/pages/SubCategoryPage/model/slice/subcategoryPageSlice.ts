import { createSlice } from "@reduxjs/toolkit"
import { fetchCategoryProducts } from "../services/fetchCategoryProducts/fetchCategoryProducts"

/* const initialState: SubCategorySchema = {
    tree: [],
    isLoading: false,
    error: undefined,
} */

const subcategoryPageSlice = createSlice({
    name: "subcategoryPage",
    initialState: {
        id: "",
        products: [],
        isLoading: false,
        name: "",
        error: undefined,
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCategoryProducts.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload.products
                state.id = action.payload.id
                state.name = action.payload.name
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.isLoading = false
                // @ts-ignore
                state.error = action.payload
            })
    },
})

export const { reducer: subcategoryPageReducer, actions: subcategoryPageActions } =
    subcategoryPageSlice
