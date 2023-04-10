import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RoutePath } from "shared/config/routeConfig/const"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./CatalogLinks.module.scss"
import { navigationTreeType } from "../../model/types/list"
import {
    getNavigationTree,
    getNavigationTreeError,
} from "../../model/selectors/sidebarNavigationSelectors"
import { fetchNavigationTree } from "../../model/services/fetchNavigationTree/fetchNavigationTree"

export function CatalogLinks() {
    const dispatch = useDispatch()
    const navigationTree: navigationTreeType = useSelector(getNavigationTree)
    const error = useSelector(getNavigationTreeError)

    useEffect(() => {
        if (!navigationTree.length && !error) {
            dispatch(fetchNavigationTree())
        }
    }, [dispatch, navigationTree, error])

    return (
        <div className={styles.container}>
            {navigationTree.map(item => {
                const { id, name, categories } = item
                return (
                    <div className={styles.links}>
                        <AppLink to={`${RoutePath.category}/${id}`} className={styles.title}>
                            {name}
                        </AppLink>
                        <div className={styles.list}>
                            {categories.map(item => {
                                const { id, name } = item

                                return (
                                    <AppLink key={id} to={`${RoutePath.sub_category}/${id}`}>
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
