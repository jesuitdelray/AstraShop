import { IPriceRange, filtersDataType } from "./types"

export interface FilterProductsSchema {
    filters: filtersDataType
    priceRange?: IPriceRange
    attributes: number[] | []
    error?: string
    isLoading: boolean
}
