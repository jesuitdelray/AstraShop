import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { fetchNavigationTree } from "../services/fetchNavigationTree/fetchNavigationTree"
import { CatalogNavigationSchema, CurrentTreeItem } from "../types/catalogNavigationSchema"
import { navigationTreeType } from "../types/list"

const initialState: CatalogNavigationSchema = {
    tree: [],
    currentTree: [],
    isLoading: false,
    error: undefined,
}

const catalogNavigationSlice = createSlice({
    name: "catalogNavigation",
    initialState,
    reducers: {
        setCurrentTree: (state, action: PayloadAction<CurrentTreeItem[]>) => {
            state.currentTree = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchNavigationTree.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchNavigationTree.fulfilled,
                (state, action: PayloadAction<navigationTreeType>) => {
                    state.isLoading = false
                    state.tree = action.payload
                }
            )
            .addCase(
                fetchNavigationTree.rejected,
                (state, action: PayloadAction<string | undefined>) => {
                    state.isLoading = false
                    state.error = action.payload
                }
            )
    },
})

export const { reducer: catalogNavigationReducer, actions: catalogNavigationActions } =
    catalogNavigationSlice
