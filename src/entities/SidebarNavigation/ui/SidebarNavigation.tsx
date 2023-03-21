import { AppLink } from "shared/ui/AppLink/AppLink"
import { sidebarNavigationItemsType, sidebarNavigationList } from "../model/list"
import styles from "./SidebarNavigation.module.scss"

export function SidebarNavigation() {
    return (
        <div className={styles.container}>
            {sidebarNavigationList.map((item: sidebarNavigationItemsType) => {
                const { id, path, text, Icon } = item
                return (
                    <AppLink key={id} to={path} className={styles.link}>
                        <Icon className={styles.icon} />
                        {text}
                    </AppLink>
                )
            })}
        </div>
    )
}
