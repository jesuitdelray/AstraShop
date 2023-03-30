import { AxiosInstance } from "axios"
import { CatalogNavigationSchema } from "entities/CatalogNavigation"
import { ModalsSchema } from "entities/ModalSlider"
import { ProductDetailsSchema } from "entities/Product"
import { SubCategoryPageSchema } from "pages/SubCategoryPage"

export interface StateSchema {
    modals: ModalsSchema
    catalogNavigation: CatalogNavigationSchema
    subcategoryPage: SubCategoryPageSchema
    productDetails: ProductDetailsSchema
}

interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
