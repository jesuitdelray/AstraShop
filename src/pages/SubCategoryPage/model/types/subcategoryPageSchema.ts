import { Product } from "entities/Product"

export interface SubCategoryPageSchema {
    id: number
    parent_category_id: number
    name: string
    products: Product[]
    isLoading: boolean
    error?: string
    _inited: boolean
}
