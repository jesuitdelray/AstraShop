import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import styles from "./Header.module.scss"
import { HeaderLeft } from "./HeaderLeft/HeaderLeft"
import { HeaderRight } from "./HeaderRight/HeaderRight"

export function Header() {
    return (
        <div className={styles.container}>
            <SearchProduct className={styles.search} />

            <HeaderLeft className={styles.headerLeft} />

            <NavigationList className={styles.navlist} variant={NavigationListVariant.DESKTOP} />

            <HeaderRight />
        </div>
    )
}
