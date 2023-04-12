import { createSlice } from "@reduxjs/toolkit"
import { fetchCategoryProducts } from "../services/fetchCategoryProducts/fetchCategoryProducts"
import { SubCategoryPageSchema } from "../types/subcategoryPageSchema"
import { fetchFilteredProducts } from "../services/fetchFilteredProducts/fetchFilteredProducts"

const initialState: SubCategoryPageSchema = {
    products: [],
    isLoading: false,
    error: undefined,
    parent_category_id: 0,
    id: 0,
    name: "",
    _inited: false,
}

const subcategoryPageSlice = createSlice({
    name: "subcategoryPage",
    initialState,
    reducers: {
        initState: state => {
            state._inited = true
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
                state.parent_category_id = action.payload.parent_category_id
                state.name = action.payload.name
            })
            .addCase(fetchCategoryProducts.rejected, (state, action) => {
                state.isLoadingProducts = false
                state.errorProducts = action.payload
            })

            .addCase(fetchFilteredProducts.pending, (state, action) => {
                state.errorProducts = undefined
                state.isLoadingProducts = true
            })
            .addCase(fetchFilteredProducts.fulfilled, (state, action) => {
                state.isLoadingProducts = false
                state.products = action.payload
            })
            .addCase(fetchFilteredProducts.rejected, (state, action) => {
                state.isLoadingProducts = false
                state.errorProducts = action.payload
            })
    },
})

export const { reducer: subcategoryPageReducer, actions: subcategoryPageActions } =
    subcategoryPageSlice
