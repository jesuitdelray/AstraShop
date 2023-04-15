import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Breadcrumbs, CatalogLinks, catalogNavigationActions } from "entities/CatalogNavigation"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(catalogNavigationActions.setCurrentTree([]))
    }, [dispatch])

    const { t } = useTranslation()

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                {t("productsCatalog")}
            </Typography>
            <CatalogLinks />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
