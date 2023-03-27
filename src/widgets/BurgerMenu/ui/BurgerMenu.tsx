import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import styles from "./BurgerMenu.module.scss"

export function BurgerMenu() {
    /* const { isOpen, onClose } = props */

    function onClose() {
        return ""
    }

    const isOpen = true

    return (
        <ModalSlider isOpen={isOpen} onClose={onClose} className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo} onClick={onClose} />
                <SearchProduct className={styles.searchbar} />
                <NavigationList
                    className={styles.navlist}
                    onLinkClick={onClose}
                    variant={NavigationListVariant.MOBILE}
                />
                <Copyright />
            </div>
        </ModalSlider>
    )
}
