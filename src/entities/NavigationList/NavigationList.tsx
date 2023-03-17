import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./NavigationList.module.scss"

interface NavigationListProps {
    className?: string
    list: any
}

export const NavigationList = memo(({ className, list }: NavigationListProps) => (
    <div className={classNames(styles.list, {}, [className])}>
        {list.map((item: any) => {
            const { id, path, text, Icon } = item
            return (
                <AppLink key={id} to={path} className={styles.link}>
                    {!!Icon && <Icon className={styles.menuItem} />}
                    {text}
                </AppLink>
            )
        })}
    </div>
))
