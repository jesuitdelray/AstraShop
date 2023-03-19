import { SmallBasket } from "entities/SmallBasket"
import { CrossIcon } from "shared/assets/icons/others"
import styles from "./HeaderRight.module.scss"

interface HeaderRightProps {
    modalOpen: string
    setModalOpen: (value: string) => void
}

export function HeaderRight({ setModalOpen, modalOpen }: HeaderRightProps) {
    return modalOpen === "basket" && window.innerWidth < 481 ? (
        <CrossIcon onClick={() => setModalOpen("")} className={styles.cross} />
    ) : (
        <SmallBasket className={styles.basket} onClick={() => setModalOpen("basket")} />
    )
}
