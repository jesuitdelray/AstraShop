import { memo } from "react"
import { ChangeLanguage } from "features/ChangeLanguage/ui/ChangeLanguage"
import { useLocation } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
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
}

export const NavigationList = memo((props: NavigationListProps) => {
    const { className, onLinkClick, variant } = props

    const { pathname } = useLocation()

    const list = variant === NavigationListVariant.MOBILE ? mobileItemsList : desktopItemsList

    return (
        <div className={classNames(styles.list, {}, [className])}>
            <ChangeLanguage />
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
                        {text}
                    </AppLink>
                )
            })}
        </div>
    )
})
