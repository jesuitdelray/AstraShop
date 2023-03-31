import { basketActions, getBasketProducts } from "entities/Basket"
import { useDispatch, useSelector } from "react-redux"

export function ToggleProductInBasket({ product }: any) {
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

    return <button onClick={clickHandler}>{isProductInBasket ? "Remove" : "Add"}</button>
}
