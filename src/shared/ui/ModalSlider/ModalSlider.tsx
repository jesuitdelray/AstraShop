import { ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./ModalSlider.module.scss"

interface ModalSliderProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

export function ModalSlider(props: ModalSliderProps) {
    const { isOpen, onClose, children } = props

    const wrapperClassName = classNames(
        styles.wrapper,
        {
            [styles.open]: isOpen,
        },
        []
    )

    function clickHandler(e: React.MouseEvent) {
        e.stopPropagation()
    }

    return (
        <div className={wrapperClassName} onClick={onClose}>
            <div className={styles.container} onClick={clickHandler}>
                {children}
            </div>
        </div>
    )
}
