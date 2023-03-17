import { SmallBasket } from "entities/SmallBasket"
import { SearchProduct } from "features/SearchProduct"
import { useState } from "react"
import { CrossIcon, MobileBurgerIcon } from "shared/assets/icons/others"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import styles from "./Header.module.scss"
import { NavigationList } from "../../../entities/NavigationList/NavigationList"
import { desktopItemsList } from "../model/items"

export function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false)

    function burgerClickHandler() {
        setBurgerOpen(prev => !prev)
    }

    return (
        <>
            <div className={styles.container}>
                <SearchProduct className={styles.search} />
                <NavigationList className={styles.navlist} list={desktopItemsList} />
                {burgerOpen ? (
                    <CrossIcon onClick={burgerClickHandler} />
                ) : (
                    <MobileBurgerIcon className={styles.burger} onClick={burgerClickHandler} />
                )}

                <SmallBasket className={styles.basket} />
            </div>
            <BurgerMenu isOpen={burgerOpen} />
        </>
    )
}
