import { SubmitOrder } from "features/SubmitOrder"
import { BannersRow } from "widgets/BannersRow"
import { ProductCardList } from "widgets/ProductCarousel/model/list"
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel"

export function OrderPage() {
    return (
        <div>
            <SubmitOrder />
            <ProductCarousel list={ProductCardList} title="Топовые позиции" />
            <BannersRow />
            <ProductCarousel list={ProductCardList} title="Новые поступления" />
        </div>
    )
}
