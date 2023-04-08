import { Product } from "entities/Product"
import { sortProductsOrderType } from "features/SortProducts"

export interface SubCategoryPageSchema {
    id: number
    parent_category_id: number
    name: string
    products: Product[]
    sortOrder: sortProductsOrderType
    isLoadingProducts: boolean
    isLoadingFilters: boolean
    errorProducts?: string
    errorFilters?: string
}
