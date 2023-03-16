import { AboutPage } from "pages/AboutPage"
import { CatalogPage } from "pages/CatalogPage"
import { CategoryPage } from "pages/CategoryPage"
import { ContactsPage } from "pages/ContactsPage"
import { DeliveryPage } from "pages/DeliveryPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { OrderPage } from "pages/OrderPage"
import { ProductDetailsPage } from "pages/ProductDetailsPage"
import { TestPage } from "pages/TestPage"
import { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
    CATALOG = "catalog",
    CONTACTS = "contacts",
    DELIVERY = "delivery",
    ORDER = "order",
    CATEGORY = "category",
    PRODUCT_DETAILS = "product_details",
    TEST = "test",
    NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.CATALOG]: "/catalog",
    [AppRoutes.CONTACTS]: "/contacts",
    [AppRoutes.DELIVERY]: "/delivery",
    [AppRoutes.ORDER]: "/order",
    [AppRoutes.CATEGORY]: "/category",
    [AppRoutes.PRODUCT_DETAILS]: "/category/product",
    [AppRoutes.TEST]: "/test",
    [AppRoutes.NOT_FOUND]: "*",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <ContactsPage />,
    },
    [AppRoutes.DELIVERY]: {
        path: RoutePath.delivery,
        element: <DeliveryPage />,
    },
    [AppRoutes.ORDER]: {
        path: RoutePath.order,
        element: <OrderPage />,
    },
    [AppRoutes.CATEGORY]: {
        path: RoutePath.category,
        element: <CategoryPage />,
    },
    [AppRoutes.PRODUCT_DETAILS]: {
        path: RoutePath.product_details,
        element: <ProductDetailsPage />,
    },
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <TestPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}
