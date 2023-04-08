import { createSlice } from "@reduxjs/toolkit"
import { fetchCategoryFilters } from "../services/fetchCategoryFilters/fetchCategoryFilters"

const initialState: any = {
    filters: [],
    error: undefined,
    isLoading: false,
}

const filterProductsSlice = createSlice({
    name: "subcategoryPage",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCategoryFilters.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchCategoryFilters.fulfilled, (state, action) => {
                state.isLoading = false
                // @ts-ignore
                state.filters = action.payload
            })
            .addCase(fetchCategoryFilters.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: filterProductsReducer, actions: filterProductsActions } =
    filterProductsSlice
