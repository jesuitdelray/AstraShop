import { Breadcrumbs } from "entities/Breadcrumbs"
import { getNavigationTree, LinksList } from "entities/CatalogNavigation"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    const breadcrumbsList = [AppRoutes.CATALOG, AppRoutes.CATEGORY]

    const { id } = useParams()
    const navigationTree = useSelector(getNavigationTree)

    const content = useMemo(() => {
        if (!navigationTree[0]) return null

        if (navigationTree.filter(item => item.id.toString() === id).length !== 1) {
            return <div>Категория не найдена</div>
        }

        const category = navigationTree.filter(item => item.id.toString() === id)[0]

        return <LinksList data={category} />
    }, [id, navigationTree])

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} />
            {content}
        </div>
    )
}
