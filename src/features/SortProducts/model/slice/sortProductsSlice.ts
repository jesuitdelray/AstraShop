import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { SortProductsSchema } from "../types/sortProductsSchema"
import { sortProductsOrderType } from "../types/types"

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
})

export const { reducer: sortProductsReducer, actions: sortProductsAction } = sortProductsSlice
