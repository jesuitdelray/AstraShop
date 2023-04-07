import { StateSchema } from "app/providers/StoreProvider"

export const getSubCategoryId = (state: StateSchema) => state.subcategoryPage.id
export const getSubCategoryName = (state: StateSchema) => state.subcategoryPage.name
export const getSortOrder = (state: StateSchema) => state.subcategoryPage.sortOrder

export const getSubCategoryProducts = (state: StateSchema) => state.subcategoryPage.products
export const getSubCategoryLoadingProducts = (state: StateSchema) =>
    state.subcategoryPage.isLoadingProducts
export const getSubCategoryErrorProducts = (state: StateSchema) =>
    state.subcategoryPage.errorProducts

export const getSubCategoryFilters = (state: StateSchema) => state.subcategoryPage.filters
export const getSubCategoryLoadingFilters = (state: StateSchema) =>
    state.subcategoryPage.isLoadingFilters
export const getSubCategoryErrorFilters = (state: StateSchema) => state.subcategoryPage.errorFilters
