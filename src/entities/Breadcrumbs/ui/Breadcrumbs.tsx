import React from "react"
import { useSelector } from "react-redux"
import { ChevronBack, MainHome } from "shared/assets/icons/others"
import { AppRoutes, RouteLinkName, RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { getCurrentTree } from "entities/CatalogNavigation/model/selectors/sidebarNavigationSelectors"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./Breadcrumbs.module.scss"

export function Breadcrumbs() {
    const currentTree = useSelector(getCurrentTree)

    const data = [{ id: null, name: "Catalog", type: "catalog" }, ...currentTree]

    return (
        <div className={styles.breadcrumbs}>
            <AppLink to={RoutePath.main}>
                <MainHome className={styles.home} />
            </AppLink>
            {data.map((route, index) => {
                const { name, id, type } = route
                const link = () => {
                    switch (type) {
                        case "category":
                            return RoutePath.category + id
                        case "sub_category":
                            return RoutePath.sub_category + id
                        case "product":
                            return RoutePath.product_details + id
                        default:
                            return RoutePath.main
                    }
                }

                return (
                    <React.Fragment key={id}>
                        <ChevronBack className={styles.icon} />
                        <div className={styles.crumbs}>
                            <AppLink
                                to={link()}
                                className={classNames(styles.link, {
                                    [styles.active]: index === data.length - 1,
                                })}
                            >
                                {name}
                            </AppLink>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
