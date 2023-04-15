import { ReactNode, memo } from "react"
import { useLocation } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { useTranslation } from "react-i18next"
import { desktopItemsList, mobileItemsList } from "../model/list"
import styles from "./NavigationList.module.scss"

export enum NavigationListVariant {
    MOBILE = "mobile",
    DESKTOP = "desktop",
}

interface NavigationListProps {
    className?: string
    variant: NavigationListVariant
    onLinkClick?: () => void
    ChangeLanguage?: ReactNode
}

export const NavigationList = memo((props: NavigationListProps) => {
    const { className, onLinkClick, variant, ChangeLanguage } = props

    const { pathname } = useLocation()

    const { t } = useTranslation()

    const list = variant === NavigationListVariant.MOBILE ? mobileItemsList : desktopItemsList

    return (
        <div className={classNames(styles.list, {}, [className])}>
            <div className={styles.changeLanguage}>{!!ChangeLanguage && ChangeLanguage}</div>
            {list.map(item => {
                const { id, path, text } = item
                return (
                    <AppLink
                        key={id}
                        to={path}
                        className={classNames(
                            styles.link,
                            { [styles.active]: path === pathname },
                            []
                        )}
                        onClick={onLinkClick}
                    >
                        {t(text)}
                    </AppLink>
                )
            })}
        </div>
    )
})
