export enum ModalsList {
    BURGER = "burger",
    BASKET = "basket",
    FILTERS = "filters",
    SUCCESS = "success",
    NONE = "",
}

export interface ModalsSchema {
    current: ModalsList
}
