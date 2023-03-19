import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Copyright.module.scss"

interface CopyrightProps {
    className?: string
}

export function Copyright({ className }: CopyrightProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>© AstraShop™ 2018–2023</div>
    )
}
