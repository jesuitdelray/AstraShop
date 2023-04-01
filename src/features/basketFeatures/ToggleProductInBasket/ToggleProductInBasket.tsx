import { basketActions, getBasketProducts } from "entities/Basket"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"

export enum ToggleProductInBasketVariant {
    ICON = "icon",
    BUTTON = "button",
}

interface ToggleProductInBasketProps {
    product: any
    variant: ToggleProductInBasketVariant
}

export function ToggleProductInBasket({ product, variant }: ToggleProductInBasketProps) {
    const { id } = product

    const basketProducts = useSelector(getBasketProducts)
    const dispatch = useDispatch()

    const isProductInBasket = basketProducts.some((item: any) => item.id === id)

    function clickHandler(e: any) {
        e.stopPropagation()
        if (isProductInBasket) {
            dispatch(basketActions.removeFromBasket(id))
        } else {
            dispatch(basketActions.addToBasket(product))
        }
    }

    switch (variant) {
        case ToggleProductInBasketVariant.ICON:
            return <button onClick={clickHandler}>{isProductInBasket ? "Remove" : "Add"}</button>
        case ToggleProductInBasketVariant.BUTTON:
            return (
                <Button onClick={clickHandler}>
                    {isProductInBasket ? "Убрать из корзины" : "Добавить в корзину"}
                </Button>
            )
        default:
            return null
    }
}
