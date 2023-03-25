import { SubmitOrder } from "features/SubmitOrder"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"

export function OrderPage() {
    return (
        <div>
            <SubmitOrder />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
            <ProductCarousel variant={ProductCarouselVariant.NEW_PRODUCTS} />
        </div>
    )
}
