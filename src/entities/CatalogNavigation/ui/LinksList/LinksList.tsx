import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { navigationCategory } from "../../model/types/list"
import styles from "./LinksList.module.scss"

interface LinksListProps {
    data: navigationCategory
    className?: string
}

export function LinksList({ data, className }: LinksListProps) {
    const { id, name, categories } = data

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <AppLink to={RoutePath.category + id} className={styles.title}>
                {name}
            </AppLink>
            <div className={styles.list}>
                {categories.map(item => {
                    const { id, name } = item

                    return (
                        <AppLink key={id} to={RoutePath.sub_category + id}>
                            {name}
                        </AppLink>
                    )
                })}
            </div>
        </div>
    )
}
