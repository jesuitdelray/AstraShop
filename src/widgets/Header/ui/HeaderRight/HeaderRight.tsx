import { SmallBasket } from "entities/SmallBasket"
import { modalActions } from "processes/Modals/model/slice/modalsSlice"
import { CurrentModalTypes } from "processes/Modals/model/types/modalsSchema"
import { useDispatch, useSelector } from "react-redux"
import { CrossIcon } from "shared/assets/icons/others"
import styles from "./HeaderRight.module.scss"

export function HeaderRight() {
    const dispatch = useDispatch()
    //@ts-ignore
    const value = useSelector(state => state.modals.current)

    return value === CurrentModalTypes.BASKET && window.innerWidth < 769 ? (
        <CrossIcon onClick={() => dispatch(modalActions.close())} className={styles.cross} />
    ) : (
        <SmallBasket
            className={styles.basket}
            onClick={() => dispatch(modalActions.openBasket())}
        />
    )
}
