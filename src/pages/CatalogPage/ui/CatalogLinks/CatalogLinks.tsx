import { LinksList, getNavigationTree, navigationTreeType } from "entities/CatalogNavigation"
import { useSelector } from "react-redux"
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
