import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SearchProduct } from "features/SearchProduct"
import { mobileItemsList } from "widgets/Header/model/items"
import { NavigationList } from "entities/NavigationList/NavigationList"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import styles from "./BurgerMenu.module.scss"

interface BurgerMenuProps {
    isOpen: boolean
    onClose: () => void
}

export function BurgerMenu(props: BurgerMenuProps) {
    const { isOpen, onClose } = props

    return (
        <ModalSlider isOpen={isOpen} onClose={onClose}>
            <Logo className={styles.logo} onClick={onClose} />
            <SearchProduct className={styles.searchbar} />
            <NavigationList
                className={styles.navlist}
                list={mobileItemsList}
                onLinkClick={onClose}
            />
            <Copyright />
        </ModalSlider>
    )
}
