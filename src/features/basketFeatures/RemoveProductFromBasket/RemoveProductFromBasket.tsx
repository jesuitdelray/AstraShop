import { basketActions } from "entities/Basket"
import { useDispatch } from "react-redux"
import { DeleteBucketIcon } from "shared/assets/icons/others"
import styles from "./RemoveProductFromBasket.module.scss"

export function RemoveProductFromBasket({ product }: any) {
    const { id } = product

    const dispatch = useDispatch()

    function clickHandler(e: any) {
        dispatch(basketActions.removeFromBasket(id))
    }

    return <DeleteBucketIcon onClick={clickHandler} className={styles.delete} />
}
