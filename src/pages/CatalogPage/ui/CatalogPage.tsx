import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { CatalogLinks } from "./CatalogLinks/CatalogLinks"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                Каталог товаров
            </Typography>
            <CatalogLinks />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
