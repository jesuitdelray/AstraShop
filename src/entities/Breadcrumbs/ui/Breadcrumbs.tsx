import { ChevronBack, MainHome } from "shared/assets/icons/others"
import { AppRoutes, RouteLinkName, RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./Breadcrumbs.module.scss"

interface BreadcrumbsProps {
    list: AppRoutes[]
}

export function Breadcrumbs({ list }: BreadcrumbsProps) {
    return (
        <div className={styles.breadcrumbs}>
            <AppLink to={RoutePath.main}>
                <MainHome className={styles.home} />
            </AppLink>
            {list?.map((route, index) => (
                <>
                    <ChevronBack className={styles.icon} />
                    <div className={styles.crumbs} key={route}>
                        <AppLink
                            to={RoutePath[route]}
                            className={classNames(styles.link, {
                                [styles.active]: index === list.length - 1,
                            })}
                        >
                            {RouteLinkName[route]}
                        </AppLink>
                    </div>
                </>
            ))}
        </div>
    )
}
