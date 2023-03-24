import { BannersRow } from "widgets/BannersRow"
import { TopBanner } from "widgets/TopBanner"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"
import styles from "widgets/ProductCarousel/ProductCarousel.module.scss"

export function MainPage() {
    return (
        <div>
            <TopBanner />
            <BannersRow />
            <ProductCarousel
                list={ProductCardList}
                className={styles.maxWidth1200}
                title="Новые поступления"
            />
        </div>
    )
}
