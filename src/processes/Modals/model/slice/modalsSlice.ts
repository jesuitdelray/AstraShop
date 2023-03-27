import { createSlice } from "@reduxjs/toolkit"
import { CurrentModalTypes, ModalsSchema } from "../types/modalsSchema"

const initialState: ModalsSchema = {
    current: CurrentModalTypes.NONE,
}

export const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        close: state => {
            state.current = CurrentModalTypes.NONE
        },
        openBurger: state => {
            state.current = CurrentModalTypes.BURGER
        },
        openBasket: state => {
            state.current = CurrentModalTypes.BASKET
        },
        openFilters: state => {
            state.current = CurrentModalTypes.FILTERS
        },
        openSuccess: state => {
            state.current = CurrentModalTypes.SUCCESS
        },
    },
})

export const { actions: modalActions } = modalSlice
export const { reducer: modalReducer } = modalSlice
