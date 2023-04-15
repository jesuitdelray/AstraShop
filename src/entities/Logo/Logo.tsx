import { Link } from "react-router-dom"
import { ShoppingBagIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Logo.module.scss"

interface LogoProps {
    className?: string
    onClick?: () => void
}

export function Logo({ className, onClick }: LogoProps) {
    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={onClick}
                className={styles.link}
            >
                <ShoppingBagIcon className={styles.icon} />
                <p className={styles.name}>AstraShop</p>
            </Link>
        </div>
    )
}
