import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SearchProduct } from "features/SearchProduct"
import { classNames } from "shared/lib/classNames/classNames"
import { mobileItemsList } from "widgets/Header/model/items"
import { NavigationList } from "../../../../entities/NavigationList/NavigationList"
import styles from "./BurgerMenu.module.scss"

interface BurgerMenuProps {
    isOpen: boolean
}

export function BurgerMenu({ isOpen }: BurgerMenuProps) {
    const containerClassName = classNames(
        styles.container,
        {
            [styles.open]: isOpen,
        },
        []
    )

    return (
        <div className={containerClassName}>
            <Logo />
            <SearchProduct />
            <NavigationList className={styles.navlist} list={mobileItemsList} />
            <Copyright />
        </div>
    )
}
