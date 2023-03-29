import { SVGProps, VFC } from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { Typography } from "shared/ui/Typography/Typography"
import { navigationCategories } from "../../model/types/list"
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
    data: navigationCategories
    className?: string
}

export function LinksList({ data, className }: LinksListProps) {
    const { name, id, categories } = data

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <Typography className={styles.title}>
                {/*  {!!Icon && <Icon className={styles.icon} />} */}
                {name}
            </Typography>
            <div className={styles.list}>
                {categories.map(item => {
                    const { id, name } = item
                    return (
                        <AppLink key={id} to={RoutePath.category}>
                            {name}
                        </AppLink>
                    )
                })}
            </div>
        </div>
    )
}
