export interface submitOrderResponse {
    url?: string
}

export interface SubmitOrderSchema extends submitOrderResponse {
    isLoading: boolean
    error?: string
}
