import { CrossIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { BannersRow } from "widgets/BannersRow"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"
import { CatalogLinks } from "./CatalogLinks/CatalogLinks"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                Каталог товаров
            </Typography>
            <CatalogLinks />
            <ProductCarousel list={ProductCardList} title="Топовые позиции" />
            <BannersRow />
        </div>
    )
}
