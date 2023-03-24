import { BannersRow } from "widgets/BannersRow"
import { TopBanner } from "widgets/TopBanner"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"

export function MainPage() {
    return (
        <div>
            <TopBanner />
            <ProductCarousel list={ProductCardList} title="Топовые позиции" />
            <BannersRow />
            <ProductCarousel list={ProductCardList} title="Новые поступления" />
        </div>
    )
}
