import { CatalogNavigationSchema } from "entities/CatalogNavigation"
import { ModalsSchema } from "entities/ModalSlider"

export interface StateSchema {
    modals: ModalsSchema
    catalogNavigation: CatalogNavigationSchema
}

export interface ThunkConfig<T> {
    rejectValue: T
    state: StateSchema
}
