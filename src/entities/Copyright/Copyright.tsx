import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Copyright.module.scss"

interface CopyrightProps {
    className?: string
}

export function Copyright({ className }: CopyrightProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            © 7e-Commerce™ 2007–2020
        </div>
    )
}
