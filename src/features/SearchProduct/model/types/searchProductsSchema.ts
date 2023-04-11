export interface ProductListItem {
    id: number
    name: string
    attributes: (string | null)[]
}

export interface SearchProductsSchema {
    isLoading: boolean
    productsList: ProductListItem[] | []
    error?: string
}
