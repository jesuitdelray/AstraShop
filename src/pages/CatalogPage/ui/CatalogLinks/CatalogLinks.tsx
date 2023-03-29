import { LinksList } from "entities/LinksList"
import { getNavigationTree } from "entities/SidebarNavigation/model/selectors/sidebarNavigationSelectors"
import { navigationTreeType } from "entities/SidebarNavigation/model/types/list"
import { useSelector } from "react-redux"
import { catalogList } from "../../model/lists"
import styles from "./CatalogLinks.module.scss"

export function CatalogLinks() {
    const navigationTree: navigationTreeType = useSelector(getNavigationTree)

    return (
        <div className={styles.container}>
            {navigationTree.map(item => {
                const { id } = item
                return <LinksList key={id} data={item} className={styles.links} />
            })}
        </div>
    )
}
