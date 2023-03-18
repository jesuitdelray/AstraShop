import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./NavigationList.module.scss"

interface NavigationListProps {
    className?: string
    list: any
    onLinkClick?: () => void
}

export const NavigationList = memo((props: NavigationListProps) => {
    const { className, list, onLinkClick } = props

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
