import { useMemo } from "react"
import { CrossIcon, MobileBurgerIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./HeaderLeft.module.scss"

interface HeaderLeftProps {
    modalOpen: string
    setModalOpen: (value: string) => void
    className?: string
}

export function HeaderLeft({ modalOpen, setModalOpen, className }: HeaderLeftProps) {
    const switcher = useMemo(() => {
        switch (modalOpen) {
            case "burger":
                return <CrossIcon onClick={() => setModalOpen("")} />
            case "basket":
                return window.innerWidth < 769 ? (
                    <Typography variant={TypographyVariant.H3}>Корзина</Typography>
                ) : (
                    <MobileBurgerIcon
                        className={styles.burger}
                        onClick={() => setModalOpen("burger")}
                    />
                )
            default:
                return (
                    <MobileBurgerIcon
                        className={styles.burger}
                        onClick={() => setModalOpen("burger")}
                    />
                )
        }
    }, [modalOpen, setModalOpen])

    return <div className={classNames(styles.container, {}, [className])}>{switcher}</div>
}
