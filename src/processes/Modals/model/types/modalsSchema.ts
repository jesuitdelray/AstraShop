export enum CurrentModalTypes {
    NONE = "",
    BURGER = "burger",
    BASKET = "basket",
    FILTERS = "filters",
    SUCCESS = "success",
}

export interface ModalsSchema {
    current: CurrentModalTypes
}
