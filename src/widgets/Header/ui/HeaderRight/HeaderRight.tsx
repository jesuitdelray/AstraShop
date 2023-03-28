import { getModalsCurrent, modalsActions, ModalsList } from "entities/ModalSlider"
import { SmallBasket } from "entities/SmallBasket"
import { useDispatch, useSelector } from "react-redux"
import { CrossIcon } from "shared/assets/icons/others"
import styles from "./HeaderRight.module.scss"

export function HeaderRight() {
    const dispatch = useDispatch()
    const currentModal = useSelector(getModalsCurrent)

    return currentModal === ModalsList.BASKET && window.innerWidth < 769 ? (
        <CrossIcon onClick={() => dispatch(modalsActions.close())} className={styles.cross} />
    ) : (
        <SmallBasket
            className={styles.basket}
            onClick={() => dispatch(modalsActions.openBasket())}
        />
    )
}
