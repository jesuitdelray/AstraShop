import { Product } from "entities/Product"

export type sortOrder = "" | "asc" | "desc"

export interface SubCategoryPageSchema {
    id: number
    name: string
    products: Product[]
    sortOrder: sortOrder
    isLoading: boolean
    error?: string
}
