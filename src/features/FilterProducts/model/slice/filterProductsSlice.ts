import { createSlice } from "@reduxjs/toolkit"
import { fetchCategoryFilters } from "../services/fetchCategoryFilters/fetchCategoryFilters"

const initialState: any = {
    filters: [],
    priceRange: undefined,
    error: undefined,
    isLoading: false,
}

const filterProductsSlice = createSlice({
    name: "filterProductsSlice",
    initialState,
    reducers: {
        setFilterAttributes: (state, action) => {
            // {groupId: number, checkId:number}
            const { groupId, checkId } = action.payload

            state.filters = state.filters.map((group: any) => {
                if (group.id === groupId) {
                    group.info.map((check: any) => {
                        if (check.id === checkId) {
                            check.isChecked = !check.isChecked
                        }
                        return check
                    })
                }
                return group
            })
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
