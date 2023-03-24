import { ProductDescription } from "entities/ProductDescription"
import { BannersRow } from "widgets/BannersRow"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"

export function ProductDetailsPage() {
    return (
        <div>
            <ProductDescription />
            <ProductCarousel list={ProductCardList} title="Топовые позиции" />
            <BannersRow />
        </div>
    )
}
