import { ShoppingBagIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Logo.module.scss"

interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <ShoppingBagIcon className={styles.icon} />
            <p className={styles.name}>AstraShop</p>
        </div>
    )
}
