export interface IPriceRange {
    min: number
    max: number
}

export interface FilterItemAttribute {
    id: number
    name: string
}

export interface FilterItemPriceRange {
    from: number
    to: number
}

interface FilterItem {
    id: number
    name: string
    info: FilterItemAttribute[] | FilterItemPriceRange
    type: "attributes" | "price_range"
}

export type filtersDataType = FilterItem[]
