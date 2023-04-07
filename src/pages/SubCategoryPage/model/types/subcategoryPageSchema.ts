import { Product } from "entities/Product"
import { sortProductsOrderType } from "features/SortProducts"

export interface SubCategoryPageSchema {
    id: number
    name: string
    products: Product[]
    filters: any[]
    sortOrder: sortProductsOrderType
    isLoadingProducts: boolean
    isLoadingFilters: boolean
    errorProducts?: string
    errorFilters?: string
}
