import { ReactElement } from "react"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import { ChangeLanguage } from "features/ChangeLanguage"
import styles from "./Header.module.scss"
import { HeaderLeft } from "./HeaderLeft/HeaderLeft"
import { HeaderRight } from "./HeaderRight/HeaderRight"

interface HeaderProps {
    BurgerModal: ReactElement
    BasketModal: ReactElement
}

export function Header(props: HeaderProps) {
    const { BurgerModal, BasketModal } = props

    return (
        <>
            {BurgerModal}
            {BasketModal}
            <div className={styles.container}>
                <SearchProduct className={styles.search} />

                <HeaderLeft className={styles.headerLeft} />

                <NavigationList
                    ChangeLanguage={<ChangeLanguage />}
                    className={styles.navlist}
                    variant={NavigationListVariant.DESKTOP}
                />

                <HeaderRight />
            </div>
        </>
    )
}
