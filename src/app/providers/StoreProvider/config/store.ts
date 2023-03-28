import { configureStore } from "@reduxjs/toolkit"
import { modalsReducer } from "entities/ModalSlider"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { modals: modalsReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
