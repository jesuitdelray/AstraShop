import { Breadcrumbs } from "entities/Breadcrumbs"
import { LinksList } from "entities/LinksList"
import { catalogList } from "pages/CatalogPage/model/lists"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    const breadcrumbsList = [AppRoutes.CATALOG, AppRoutes.CATEGORY]
    return (
        <div className={styles.wrapper}>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} />
            <LinksList data={catalogList[0]} />
        </div>
    )
}
