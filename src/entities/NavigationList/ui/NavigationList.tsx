import { memo } from "react"
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

    const list = variant === NavigationListVariant.MOBILE ? mobileItemsList : desktopItemsList

    return (
        <div className={classNames(styles.list, {}, [className])}>
            {list.map((item: any) => {
                const { id, path, text, Icon } = item
                return (
                    <AppLink key={id} to={path} className={styles.link} onClick={onLinkClick}>
                        {!!Icon && <Icon className={styles.menuItem} />}
                        {text}
                    </AppLink>
                )
            })}
        </div>
    )
})
