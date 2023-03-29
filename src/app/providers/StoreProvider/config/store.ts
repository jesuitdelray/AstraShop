import { configureStore } from "@reduxjs/toolkit"
import { modalsReducer } from "entities/ModalSlider"
import { sidebarNavigationReducer } from "entities/SidebarNavigation/model/slice/sidebarNavigationSlice"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { modals: modalsReducer, sidebarNavigation: sidebarNavigationReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
