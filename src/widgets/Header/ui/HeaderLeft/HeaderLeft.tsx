import { modalActions } from "processes/Modals/model/slice/modalsSlice"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CrossIcon, MobileBurgerIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./HeaderLeft.module.scss"

interface HeaderLeftProps {
    className?: string
}

export function HeaderLeft({ className }: HeaderLeftProps) {
    const dispatch = useDispatch()
    //@ts-ignore
    const value = useSelector(state => state.modals.current)

    const switcher = useMemo(() => {
        switch (value) {
            case "burger":
                return (
                    <CrossIcon
                        onClick={() => dispatch(modalActions.close())}
                        className={styles.icon}
                    />
                )
            case "basket":
                return window.innerWidth < 769 ? (
                    <Typography variant={TypographyVariant.H3}>Корзина</Typography>
                ) : (
                    <MobileBurgerIcon
                        className={styles.icon}
                        onClick={() => dispatch(modalActions.openBurger())}
                    />
                )
            default:
                return (
                    <MobileBurgerIcon
                        className={styles.icon}
                        onClick={() => dispatch(modalActions.openBurger())}
                    />
                )
        }
    }, [value, dispatch])

    return <div className={classNames(styles.container, {}, [className])}>{switcher}</div>
}
