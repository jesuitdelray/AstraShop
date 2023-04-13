import { StateSchema } from "app/providers/StoreProvider"

export const getProductFilters = (state: StateSchema) => state.filterProducts.filters
export const getProductFiltersLoading = (state: StateSchema) => state.filterProducts.isLoading
export const getProductFiltersError = (state: StateSchema) => state.filterProducts.error
export const getProductFiltersPriceRange = (state: StateSchema) => state.filterProducts.priceRange

export const getProductFilterId = null
