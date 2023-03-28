import { ReactNode } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Modal } from "shared/ui/Modal/Modal"
import styles from "./ModalSlider.module.scss"

export enum ModalSliderVariant {
    SLIDER = "slider",
    MODAL = "modal",
}

export enum ModalSliderDirection {
    TOP = "top",
    RIGHT = "right",
}

interface ModalSliderProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
    direction?: ModalSliderDirection
    variant?: ModalSliderVariant
}

export function ModalSlider(props: ModalSliderProps) {
    const {
        isOpen,
        onClose,
        children,
        className,
        direction = ModalSliderDirection.TOP,
        variant = ModalSliderVariant.SLIDER,
    } = props

    const wrapperClassName = classNames(
        styles.wrapper,
        {
            [styles.open]: isOpen,
        },
        [className, styles[direction]]
    )

    function clickHandler(e: React.MouseEvent) {
        e.stopPropagation()
    }

    return variant === ModalSliderVariant.MODAL ? (
        <Modal isOpen={isOpen} onClose={onClose} className={className}>
            {children}
        </Modal>
    ) : (
        <div className={wrapperClassName} onClick={onClose}>
            <div className={styles.container} onClick={clickHandler}>
                {children}
            </div>
        </div>
    )
}
