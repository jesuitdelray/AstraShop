import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SidebarNavigation } from "entities/SidebarNavigation"
import styles from "./Sidebar.module.scss"

export function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo} />
                <SidebarNavigation />
                <Copyright className={styles.copyright} />
            </div>
        </div>
    )
}
