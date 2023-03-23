import { LinksSidebar } from "widgets/LinksSidebar"
import { ProductCardList } from "widgets/ProductCard/model/list"
import { ProductCard, ProductCarousel } from "widgets/ProductCard"
import styles from "widgets/ProductCard/ui/ProductCarousel/ProductCarousel.module.scss"

export function MainPage() {
    return (
        <div>
            <LinksSidebar />
            <ProductCarousel
                list={ProductCardList}
                className={styles.maxWidth1200}
                title="Новые поступления"
            />
            <div style={{ width: "260px" }}>
                <ProductCard {...ProductCardList[0]} />
            </div>
        </div>
    )
}
