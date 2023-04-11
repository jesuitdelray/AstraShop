import { configureStore } from "@reduxjs/toolkit"
import { changeLanguageReducer } from "features/ChangeLanguage"
import { catalogNavigationReducer } from "entities/CatalogNavigation"
import { modalsReducer } from "entities/ModalSlider"
import { productDetailsReducer } from "pages/ProductDetailsPage"
import { basketReducer } from "entities/Basket"
import { subcategoryPageReducer } from "pages/SubCategoryPage"
import { $api } from "shared/api/api"
import { productCarouselReducer } from "widgets/ProductCarousel"
import { sortProductsReducer } from "features/SortProducts"
import { searchProductsReducer } from "features/SearchProduct"
import { StateSchema } from "./StateSchema"

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: {
            modals: modalsReducer,
            catalogNavigation: catalogNavigationReducer,
            subcategoryPage: subcategoryPageReducer,
            productDetails: productDetailsReducer,
            productCarousel: productCarouselReducer,
            changeLanguage: changeLanguageReducer,
            searchProducts: searchProductsReducer,
            sortProducts: sortProductsReducer,
            basket: basketReducer,
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
