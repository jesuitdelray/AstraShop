import { Basket } from "widgets/Basket"
import { BurgerMenu } from "widgets/BurgerMenu"
import { FiltersModalSlider } from "widgets/FiltersModalSlider"
import { SuccessOrder } from "widgets/SuccessOrder"

export function Modals() {
    return (
        <>
            <BurgerMenu />
            <Basket />
            <FiltersModalSlider />
            <SuccessOrder />
        </>
    )
}
