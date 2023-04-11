import { StateSchema } from "app/providers/StoreProvider"

export const getSearchProductsList = (state: StateSchema) => state.searchProducts.productsList
export const getSearchProductsLoading = (state: StateSchema) => state.searchProducts.isLoading
export const getSearchProductsError = (state: StateSchema) => state.searchProducts.error
