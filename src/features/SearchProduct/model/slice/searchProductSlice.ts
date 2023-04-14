import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProductListItem, SearchProductsSchema } from "../types/searchProductsSchema"
import { fetchSearchProducts } from "../services/fetchSearchProducts"

const initialState: SearchProductsSchema = {
    productsList: [],
    isLoading: false,
}

const searchProductsSlice = createSlice({
    name: "features/subcategoryPage",
    initialState,
    reducers: {
        clearProductsList: state => {
            state.productsList = []
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchSearchProducts.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchSearchProducts.fulfilled,
                (state, action: PayloadAction<ProductListItem[] | []>) => {
                    state.isLoading = false
                    state.productsList = action.payload
                }
            )
            .addCase(
                fetchSearchProducts.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const { reducer: searchProductsReducer, actions: searchProductsActions } =
    searchProductsSlice
