import { LinksList } from "entities/LinksList"
import { catalogList } from "pages/CatalogPage/model/lists"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    return (
        <div className={styles.wrapper}>
            <LinksList data={catalogList[0]} />
        </div>
    )
}
