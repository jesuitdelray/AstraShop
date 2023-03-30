interface SubCategoryPageProduct {
    id?: string
    is_new?: boolean
    className?: string
    images?: string[]
    name: string
    price: number
    currency?: string
}

export interface SubCategoryPageSchema {
    id: number
    name: string
    products: SubCategoryPageProduct[]
    isLoading: boolean
    error?: string
}
