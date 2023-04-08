import { navigationTreeType } from "./list"

/* interface categoryType {
    id: number
    name: string
}

interface subcategoryType {
    id: number
    name: string
}

interface productType {
    id: number
    name: string
} */

export interface CatalogNavigationSchema {
    tree: navigationTreeType | []
    currentTree: any[]
    isLoading: boolean
    error?: string
}
