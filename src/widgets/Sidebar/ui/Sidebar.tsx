import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { SidebarNavigation } from "entities/SidebarNavigation"
import { ProductFilters } from "features/ProductFilters"
import { useMatch } from "react-router-dom"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import styles from "./Sidebar.module.scss"

export function Sidebar() {
    const catalogPage = useMatch(AppRoutes.CATALOG)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo} />
                {catalogPage ? <ProductFilters /> : <SidebarNavigation />}
                <Copyright className={styles.copyright} />
            </div>
        </div>
    )
}
