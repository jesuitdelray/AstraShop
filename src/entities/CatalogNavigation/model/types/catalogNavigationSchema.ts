import { navigationTreeType } from "./list"

export interface CatalogNavigationSchema {
    tree: navigationTreeType | []
    isLoading: boolean
    error?: string
}
