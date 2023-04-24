import { classNames, Mods } from "shared/lib/classNames/classNames"
import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from "react"
import cls from "./Modal.module.scss"
import { Portal } from "./components/Portal"

interface ModalProps {
    className?: string
    children: ReactNode
    isOpen: boolean
    onClose: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props

    const [isClosing, setIsClosing] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

    console.log("isClosing: ", isClosing, "isMounted: ", isMounted, "isOpen: ", isOpen)

    useEffect(() => {
        if (isOpen && !isMounted) {
            setIsMounted(true)
        } else if (!isOpen && isMounted) {
            setTimeout(() => {
                setIsMounted(false)
            }, ANIMATION_DELAY)
        }
    }, [isOpen])

    /*  const closeHandler = () => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    } */

    /* useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        } else {
            setIsClosing(true)
            setTimeout(() => {
                setIsClosing(false)
                setIsMounted(false)
            }, ANIMATION_DELAY)
        }
    }, [isOpen]) */

    /* const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeHandler()
            }
        },
        [closeHandler]
    ) */

    /* const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    } */

    /*   useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [isOpen, onKeyDown]) */

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    if (!isMounted) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
