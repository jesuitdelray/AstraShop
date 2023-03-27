import { BannersRow } from "widgets/BannersRow"
import { TopBanner } from "widgets/TopBanner"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { useSelector } from "react-redux"

export function MainPage() {
    return (
        <div>
            <TopBanner />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
            <ProductCarousel variant={ProductCarouselVariant.NEW_PRODUCTS} />
        </div>
    )
}
