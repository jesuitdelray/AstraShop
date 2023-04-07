import { getNavigationTree, navigationTreeType } from "entities/CatalogNavigation"
import { useSelector } from "react-redux"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./CatalogLinks.module.scss"

export function CatalogLinks() {
    const navigationTree: navigationTreeType = useSelector(getNavigationTree)

    return (
        <div className={styles.container}>
            {navigationTree.map(item => {
                const { id, name, categories } = item
                return (
                    <div className={styles.links}>
                        <AppLink to={RoutePath.category + id} className={styles.title}>
                            {name}
                        </AppLink>
                        <div className={styles.list}>
                            {categories.map(item => {
                                const { id, name } = item

                                return (
                                    <AppLink key={id} to={RoutePath.sub_category + id}>
                                        {name}
                                    </AppLink>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
