import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SortProductsSchema } from "../types/sortProductsSchema"
import { sortProductsOrderType } from "../types/types"
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams"

const initialState: SortProductsSchema = {
    order: sortProductsOrderType.NONE,
}

const sortProductsSlice = createSlice({
    name: "features/sortProductsSlice",
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<sortProductsOrderType>) => {
            state.order = action.payload
        },
    },
    /* extraReducers: builder => {
        builder
            .addCase(fetchCategoryProducts.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload.products
                state.id = action.payload.id
                state.parent_category_id = action.payload.parent_category_id
                state.name = action.payload.name
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }, */
})

export const { reducer: sortProductsReducer, actions: sortProductsAction } = sortProductsSlice
