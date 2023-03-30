import { configureStore } from "@reduxjs/toolkit"
import { catalogNavigationReducer } from "entities/CatalogNavigation"
import { modalsReducer } from "entities/ModalSlider"
import { subcategoryPageReducer } from "pages/SubCategoryPage"
import { $api } from "shared/api/api"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            modals: modalsReducer,
            catalogNavigation: catalogNavigationReducer,
            subcategoryPage: subcategoryPageReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: {
                        api: $api,
                    },
                },
            }),
    })
}
