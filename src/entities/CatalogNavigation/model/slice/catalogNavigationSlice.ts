import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchNavigationTree } from "../services/fetchNavigationTree/fetchNavigationTree"
import { CatalogNavigationSchema } from "../types/catalogNavigationSchema"
import { navigationTreeType } from "../types/list"

const initialState: CatalogNavigationSchema = {
    tree: [],
    isLoading: false,
    error: undefined,
}

const catalogNavigationSlice = createSlice({
    name: "catalogNavigation",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchNavigationTree.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchNavigationTree.fulfilled, (state, action) => {
                state.isLoading = false
                state.tree = action.payload
            })
            .addCase(fetchNavigationTree.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: catalogNavigationReducer, actions: catalogNavigationActions } =
    catalogNavigationSlice
