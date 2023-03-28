import { Breadcrumbs } from "entities/Breadcrumbs"
import { ProductDescription } from "entities/ProductDescription"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"

export function ProductDetailsPage() {
    const list = [AppRoutes.CATALOG, AppRoutes.CATEGORY, AppRoutes.PRODUCT_DETAILS]

    return (
        <div>
            <Breadcrumbs list={list} />
            <ProductDescription />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
