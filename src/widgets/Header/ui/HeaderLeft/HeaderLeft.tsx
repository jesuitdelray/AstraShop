import { modalActions } from "processes/Modals/model/slice/modalsSlice"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { CrossIcon, MobileBurgerIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./HeaderLeft.module.scss"

interface HeaderLeftProps {
    className?: string
}

export function HeaderLeft({ className }: HeaderLeftProps) {
    const dispatch = useDispatch()

    const switcher = () => {
        switch (true) {
            case true:
                return (
                    <CrossIcon
                        onClick={() => dispatch(modalActions.close)}
                        className={styles.icon}
                    />
                )
            case true:
                return window.innerWidth < 769 ? (
                    <Typography variant={TypographyVariant.H3}>Корзина</Typography>
                ) : (
                    <MobileBurgerIcon
                        className={styles.icon}
                        onClick={() => dispatch(modalActions.openBurger)}
                    />
                )
            default:
                return (
                    <MobileBurgerIcon
                        className={styles.icon}
                        /* onClick={() => dispatch(modalActions.openBurger)} */
                    />
                )
        }
    }

    function fn() {
        dispatch(modalActions.openBasket())
    }
    return <div className={classNames(styles.container, {}, [className])}>{switcher()}</div>
}
