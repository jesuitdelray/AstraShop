import { createSlice } from "@reduxjs/toolkit"
import { sortProductsOrderType } from "features/SortProducts"
import { fetchCategoryProducts } from "../services/fetchCategoryProducts/fetchCategoryProducts"
import { SubCategoryPageSchema } from "../types/subcategoryPageSchema"
import { fetchCategoryFilters } from "../services/fetchCategoryFilters/fetchCategoryFilters"

const initialState: SubCategoryPageSchema = {
    products: [],
    filters: [],
    isLoadingProducts: false,
    isLoadingFilters: false,
    errorProducts: undefined,
    errorFilters: undefined,
    sortOrder: sortProductsOrderType.NONE,
    id: 0,
    name: "",
}

const subcategoryPageSlice = createSlice({
    name: "subcategoryPage",
    initialState,
    reducers: {
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategoryProducts.pending, (state, action) => {
                state.errorProducts = undefined
                state.isLoadingProducts = true
            })
            .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
                state.isLoadingProducts = false
                state.products = action.payload.products
                state.id = action.payload.id
                state.name = action.payload.name
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.isLoadingProducts = false
                state.errorProducts = action.payload
            })
            .addCase(fetchCategoryFilters.pending, (state, action) => {
                state.errorFilters = undefined
                state.isLoadingFilters = true
            })
            .addCase(fetchCategoryFilters.fulfilled, (state, action) => {
                state.isLoadingFilters = false
                // @ts-ignore
                state.filters = action.payload
            })
            .addCase(fetchCategoryFilters.rejected, (state, action) => {
                state.isLoadingFilters = false
                state.errorFilters = action.payload
            })
    },
})

export const { reducer: subcategoryPageReducer, actions: subcategoryPageActions } =
    subcategoryPageSlice
