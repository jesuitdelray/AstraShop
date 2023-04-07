/* import { SidebarNavigation } from "entities/CatalogNavigation"
import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { ProductFilters } from "features/ProductFilters"
import { useMatch } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import styles from "./Sidebar.module.scss"

export function Sidebar() {
    const subCategoryPage = useMatch(`${RoutePath.sub_category}`)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Logo className={styles.logo} />
                {subCategoryPage ? <ProductFilters /> : <SidebarNavigation />}
                <Copyright className={styles.copyright} />
            </div>
        </div>
    )
}
 */
