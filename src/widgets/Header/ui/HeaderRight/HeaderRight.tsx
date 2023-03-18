import { SmallBasket } from "entities/SmallBasket"
import { CrossIcon } from "shared/assets/icons/others"
import styles from "./HeaderRight.module.scss"

export function HeaderRight({ setModalOpen, modalOpen }: any) {
    return modalOpen === "basket" && window.innerWidth < 481 ? (
        <CrossIcon onClick={() => setModalOpen("")} className={styles.cross} />
    ) : (
        <SmallBasket className={styles.basket} onClick={() => setModalOpen("basket")} />
    )
}
