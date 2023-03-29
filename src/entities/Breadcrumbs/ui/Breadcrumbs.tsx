import React from "react"
import { ChevronBack, MainHome } from "shared/assets/icons/others"
import { AppRoutes, RouteLinkName, RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import styles from "./Breadcrumbs.module.scss"

interface BreadcrumbsProps {
    breadcrumbsList: AppRoutes[]
}

export function Breadcrumbs({ breadcrumbsList }: BreadcrumbsProps) {
    return (
        <div className={styles.breadcrumbs}>
            <AppLink to={RoutePath.main}>
                <MainHome className={styles.home} />
            </AppLink>
            {breadcrumbsList?.map((route, index) => (
                <React.Fragment key={route}>
                    <ChevronBack className={styles.icon} />
                    <div className={styles.crumbs} key={route}>
                        <AppLink
                            to={RoutePath[route]}
                            className={classNames(styles.link, {
                                [styles.active]: index === breadcrumbsList.length - 1,
                            })}
                        >
                            {RouteLinkName[route]}
                        </AppLink>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}
