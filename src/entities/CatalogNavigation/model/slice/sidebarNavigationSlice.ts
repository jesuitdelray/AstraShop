import { createSlice } from "@reduxjs/toolkit"
import { fetchNavigationTree } from "../services/fetchNavigationTree/fetchNavigationTree"

const catalogNavigationSlice = createSlice({
    name: "catalogNavigation",
    initialState: {
        tree: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        setTree: (state, action) => {
            state.tree = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNavigationTree.pending, (state, action) => {
                state.error = null
                state.isLoading = true
            })
            .addCase(fetchNavigationTree.fulfilled, (state, action) => {
                state.isLoading = false
                state.tree = action.payload
            })
            .addCase(fetchNavigationTree.rejected, (state, action) => {
                state.isLoading = false
                // @ts-ignore
                state.error = action.payload
            })
    },
})

export const { reducer: catalogNavigationReducer, actions: catalogNavigationActions } =
    catalogNavigationSlice
