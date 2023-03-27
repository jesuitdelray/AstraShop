import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { modalActions, CurrentModalTypes } from "processes/Modals"
import { StateSchema } from "app/providers/StoreProvider"
import styles from "./BurgerMenu.module.scss"

export function BurgerMenu() {
    const value = useSelector((state: StateSchema) => state.modals.current)
    const dispatch = useDispatch()

    function onClose() {
        dispatch(modalActions.close())
    }

    return (
        <ModalSlider
            isOpen={value === CurrentModalTypes.BURGER}
            onClose={onClose}
            className={styles.wrapper}
        >
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
