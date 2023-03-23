import { ProductDescription } from "entities/ProductDescription"
import styles from "./ProductDetailsPage.module.scss"

export function ProductDetailsPage() {
    return (
        <div className={styles.wrapper}>
            <ProductDescription />
        </div>
    )
}
