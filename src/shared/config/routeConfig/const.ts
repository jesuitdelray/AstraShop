export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    CATALOG = "catalog",
    CONTACTS = "contacts",
    DELIVERY = "delivery",
    ORDER = "order",
    CATEGORY = "category",
    SUB_CATEGORY = "sub_category",
    PRODUCT_DETAILS = "product_details",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.CATALOG]: "/catalog",
    [AppRoutes.CONTACTS]: "/contacts",
    [AppRoutes.DELIVERY]: "/delivery",
    [AppRoutes.ORDER]: "/order",
    [AppRoutes.CATEGORY]: "/category", // + /:id
    [AppRoutes.SUB_CATEGORY]: "/sub", // + /:id
    [AppRoutes.PRODUCT_DETAILS]: "/product", // + /:id
    [AppRoutes.NOT_FOUND]: "*",
}
