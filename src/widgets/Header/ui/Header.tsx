import { Logo, LogoVariant } from "entities/Logo/Logo"
import { ReactElement } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant, NavigationListColor } from "entities/NavigationList"
import { ChangeLanguage, ChangeLanguageColor } from "features/ChangeLanguage"
import styles from "./Header.module.scss"
import { HeaderLeft } from "./HeaderLeft/HeaderLeft"
import { HeaderRight } from "./HeaderRight/HeaderRight"

interface HeaderProps {
    BurgerModal: ReactElement
    BasketModal: ReactElement
}

export function Header(props: HeaderProps) {
    const { BurgerModal, BasketModal } = props

    const isMainPage = window.location.pathname === "/"

    return (
        <>
            {BurgerModal}
            {BasketModal}
            <div className={classNames(styles.wrapper, { [styles.main]: isMainPage })}>
                <div className={styles.container}>
                    <Logo
                        variant={isMainPage ? LogoVariant.INVERTED : LogoVariant.NORMAL}
                        className={styles.logo}
                    />

                    <SearchProduct className={styles.search} />

                    <HeaderLeft className={styles.headerLeft} isMainPage={isMainPage} />

                    <NavigationList
                        ChangeLanguage={
                            <ChangeLanguage
                                color={
                                    isMainPage
                                        ? ChangeLanguageColor.INVERTED
                                        : ChangeLanguageColor.NORMAL
                                }
                            />
                        }
                        className={styles.navlist}
                        variant={NavigationListVariant.DESKTOP}
                        color={
                            isMainPage ? NavigationListColor.INVERTED : NavigationListColor.NORMAL
                        }
                    />

                    <HeaderRight isMainPage={isMainPage} />
                </div>
            </div>
        </>
    )
}
