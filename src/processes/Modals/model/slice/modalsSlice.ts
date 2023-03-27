import { createSlice } from "@reduxjs/toolkit"

export const modalSlice = createSlice({
    name: "modals",
    initialState: {
        modal: "",
    },
    reducers: {
        close: state => {
            state.modal = ""
        },
        openBurger: state => {
            state.modal = "burger"
        },
        openBasket: state => {
            state.modal = "basket"
        },
        openFilters: state => {
            state.modal = "filters"
        },
        openSuccess: state => {
            state.modal = "success"
        },
    },
})

export const { actions: modalActions } = modalSlice
export const { reducer: modalReducer } = modalSlice
