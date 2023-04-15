import {
    Breadcrumbs,
    getNavigationTree,
    catalogNavigationActions,
    CurrentTreeItemType,
} from "entities/CatalogNavigation"
import { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RoutePath } from "shared/config/routeConfig/const"
import { useNavigate, useParams } from "react-router-dom"
import { CategoryLinks } from "./CategoryLinks/CategoryLinks"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const navigationTree = useSelector(getNavigationTree)

    const getCategoryName = useCallback(
        () => navigationTree.filter(item => id && +id === item.id)?.[0]?.name || "Category",
        [id, navigationTree]
    )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(
            catalogNavigationActions.setCurrentTree([
                {
                    id: id !== undefined ? +id : 0,
                    name: getCategoryName(),
                    type: CurrentTreeItemType.CATEGORY,
                },
            ])
        )
    }, [getCategoryName, dispatch, id])

    const content = useMemo(() => {
        if (!navigationTree[0]) return null

        if (navigationTree.filter(item => item.id.toString() === id).length !== 1) {
            navigate(RoutePath.not_found)
            return null
        }

        const category = navigationTree.filter(item => item.id.toString() === id)[0]

        return <CategoryLinks data={category} />
    }, [id, navigationTree, navigate])

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            {content}
        </div>
    )
}
