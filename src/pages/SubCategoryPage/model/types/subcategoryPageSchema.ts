import { Product } from "entities/Product"

export interface SubCategoryPageSchema {
    id: number
    name: string
    products: Product[]
    isLoading: boolean
    error?: string
}
