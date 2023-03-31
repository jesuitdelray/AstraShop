import { BasketModalSlider } from "widgets/BasketModalSlider"
import { BurgerMenu } from "widgets/BurgerMenu"
import { FiltersModalSlider } from "widgets/FiltersModalSlider"
import { SortModalSlider } from "widgets/SortModalSlider"
import { SuccessOrder } from "widgets/SuccessOrder"

export function Modals() {
    return (
        <>
            <BurgerMenu />
            <BasketModalSlider />
            <FiltersModalSlider />
            <SortModalSlider />
            <SuccessOrder />
        </>
    )
}
