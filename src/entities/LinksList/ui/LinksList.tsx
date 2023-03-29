import { SVGProps, VFC } from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Typography } from "shared/ui/Typography/Typography"
import styles from "./LinksList.module.scss"

interface ListItemType {
    id: string
    text: string
    path: string
}

export interface LinksListItem {
    id?: string
    Icon?: VFC<SVGProps<SVGSVGElement>>
    title: string
    list: ListItemType[]
}

interface LinksListProps {
    data: LinksListItem
    className?: string
}

export function LinksList({ data, className }: LinksListProps) {
    const { title, list, Icon } = data

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <AppLink className={styles.title} to={RoutePath.category}>
                {!!Icon && <Icon className={styles.icon} />}
                {title}
            </AppLink>
            <div className={styles.list}>
                {list.map(item => {
                    const { id, text, path } = item
                    return (
                        <AppLink key={id} to={path}>
                            {text}
                        </AppLink>
                    )
                })}
            </div>
        </div>
    )
}
