import { ReactNode, useEffect } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ModalSlider.module.scss"

export enum ModalSliderVariant {
    TOP = "top",
    RIGHT = "right",
}

interface ModalSliderProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
    variant?: ModalSliderVariant
}

export function ModalSlider(props: ModalSliderProps) {
    const { isOpen, onClose, children, className, variant = ModalSliderVariant.TOP } = props

    const wrapperClassName = classNames(
        styles.wrapper,
        {
            [styles.open]: isOpen,
        },
        [className, styles[variant]]
    )

    function clickHandler(e: React.MouseEvent) {
        e.stopPropagation()
    }

    useEffect(() => {
        document.documentElement.classList.toggle("noScroll", isOpen)
    }, [isOpen])

    return (
        <div className={wrapperClassName} onClick={onClose}>
            <div className={styles.container} onClick={clickHandler}>
                {children}
            </div>
        </div>
    )
}
