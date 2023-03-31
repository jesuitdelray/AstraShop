import { Breadcrumbs } from "entities/Breadcrumbs"
import { ProductDetails } from "entities/Product"
import { useDispatch } from "react-redux"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"

export function ProductDetailsPage() {
    const breadcrumbsList = [
        AppRoutes.CATALOG,
        AppRoutes.CATEGORY,
        AppRoutes.SUB_CATEGORY,
        AppRoutes.PRODUCT_DETAILS,
    ]

    return (
        <div>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} />
            <ProductDetails />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
