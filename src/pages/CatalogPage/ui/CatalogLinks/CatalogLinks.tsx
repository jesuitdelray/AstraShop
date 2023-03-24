import { LinksList } from "entities/LinksList"
import { catalogList } from "../../model/lists"
import styles from "./CatalogLinks.module.scss"

export function CatalogLinks() {
    return (
        <div className={styles.container}>
            {catalogList.map(item => (
                <LinksList key={item.id} data={item} className={styles.links} />
            ))}
        </div>
    )
}
