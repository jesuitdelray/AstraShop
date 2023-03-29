import { Breadcrumbs } from "entities/Breadcrumbs"
import { getNavigationTree, LinksList } from "entities/CatalogNavigation"
import { useSelector } from "react-redux"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    const breadcrumbsList = [AppRoutes.CATALOG, AppRoutes.CATEGORY]

    const navigationTree = useSelector(getNavigationTree)

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} />
            {navigationTree[0] && <LinksList data={navigationTree[0]} />}
        </div>
    )
}
