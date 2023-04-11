import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import i18n from "shared/config/i18n/i18n"
import { LANGUAGE_LOCALSTORAGE } from "shared/const/localstorage"
import { Languages } from "../../config/config"
import { ChangeLanguageSchema } from "../types/changeLanguageSchema"

const initialState: ChangeLanguageSchema = {}

const changeLanguageSlice = createSlice({
    name: "changeLanguage",
    initialState,
    reducers: {
        initLanguage: state => {
            const storageLanguage =
                (localStorage.getItem(LANGUAGE_LOCALSTORAGE) as Languages) || Languages.ENGLISH
            if (storageLanguage) {
                i18n.changeLanguage(storageLanguage)
                state.language = storageLanguage
            }
        },

        setCurrentLanguage: (state, action: PayloadAction<Languages>) => {
            state.language = action.payload
            if (state.language) {
                localStorage.setItem(LANGUAGE_LOCALSTORAGE, state.language)
            }
        },
    },
})

export const { reducer: changeLanguageReducer, actions: changeLanguageActions } =
    changeLanguageSlice
