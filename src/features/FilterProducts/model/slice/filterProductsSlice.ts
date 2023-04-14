import { createSlice } from "@reduxjs/toolkit"
import { fetchCategoryFilters } from "../services/fetchCategoryFilters/fetchCategoryFilters"

const initialState: any = {
    filters: [],
    priceRange: { min: 0, max: 0 },
    attributes: [],
    error: undefined,
    isLoading: false,
}

const filterProductsSlice = createSlice({
    name: "filterProductsSlice",
    initialState,
    reducers: {
        setFilterAttributes: (state, action) => {
            const arr = state.attributes.filter(item => item == action.payload)

            if (arr.length) {
                state.attributes = state.attributes.filter(item => item != action.payload)
            } else {
                state.attributes = [...state.attributes, action.payload]
            }
        },
        setPriceRange: (state, action) => {
            // groupId, range: {min: number, max:number}
            const { range } = action.payload

            state.priceRange = range
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
