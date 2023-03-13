import { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: "Main Page",
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: "About Page",
    },
}
