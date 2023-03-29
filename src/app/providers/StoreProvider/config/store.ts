import { configureStore } from "@reduxjs/toolkit"
import { catalogNavigationReducer } from "entities/CatalogNavigation/model/slice/sidebarNavigationSlice"
import { modalsReducer } from "entities/ModalSlider"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { modals: modalsReducer, catalogNavigation: catalogNavigationReducer },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}
