import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { modalActions } from "processes/Modals/model/slice/modalsSlice"
import { CurrentModalTypes } from "processes/Modals/model/types/modalsSchema"
import styles from "./BurgerMenu.module.scss"

export function BurgerMenu() {
    //@ts-ignore
    const value = useSelector(state => state.modals.current)
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
