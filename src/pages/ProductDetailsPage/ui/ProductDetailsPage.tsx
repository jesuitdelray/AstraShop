import { ProductDescription } from "entities/ProductDescription"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"

export function ProductDetailsPage() {
    return (
        <div>
            <ProductDescription />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
