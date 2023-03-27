import { configureStore } from "@reduxjs/toolkit"
import { modalReducer } from "processes/Modals"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { modals: modalReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
