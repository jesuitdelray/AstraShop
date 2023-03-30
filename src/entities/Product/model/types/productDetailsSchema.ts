export interface Product {
    id: number
    name: string
    is_new: boolean
    images: string[]
    price: number
}

export interface ProductDetailsSchema {
    data?: Product
    isLoading: boolean
    error?: string
}
