import { createSlice } from "@reduxjs/toolkit"
import { ModalsSchema } from "../types/modalsSchema"
import { ModalsList } from "../const/modalList"

const initialState: ModalsSchema = {
    current: ModalsList.NONE,
}

export const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        close: state => {
            state.current = ModalsList.NONE
        },
        openBurger: state => {
            state.current = ModalsList.BURGER
        },
        openBasket: state => {
            state.current = ModalsList.BASKET
        },
        openFilters: state => {
            state.current = ModalsList.FILTERS
        },
        openSort: state => {
            state.current = ModalsList.SORT
        },
        openSuccess: state => {
            state.current = ModalsList.SUCCESS
        },
        openOrderError: state => {
            state.current = ModalsList.ORDER_ERROR
        },
        openPaymentError: state => {
            state.current = ModalsList.PAYMENT_ERROR
        },
    },
})

export const { actions: modalsActions } = modalsSlice
export const { reducer: modalsReducer } = modalsSlice
