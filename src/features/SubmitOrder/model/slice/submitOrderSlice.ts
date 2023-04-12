import { createSlice } from "@reduxjs/toolkit"
import { SubmitOrderSchema } from "../types/submitOrderSchema"
import { createNewOrder } from "../services/createNewOrder/createNewOrder"

const initialState: SubmitOrderSchema = {
    response: "",
    isLoading: false,
}

const submitOrderSlice = createSlice({
    name: "submitOrder",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(createNewOrder.pending, (state, action) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(createNewOrder.fulfilled, (state, action) => {
                state.isLoading = false
                state.response = action.payload
            })
            .addCase(createNewOrder.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { reducer: submitOrderReducer, actions: submitOrderActions } = submitOrderSlice
