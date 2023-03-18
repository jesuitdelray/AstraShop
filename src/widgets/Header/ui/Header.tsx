import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import styles from "./Header.module.scss"
import { HeaderLeft } from "./HeaderLeft/HeaderLeft"
import { HeaderRight } from "./HeaderRight/HeaderRight"

const isMobile = false

export function Header({ modalOpen, setModalOpen }: any) {
    return (
        <div className={styles.container}>
            <SearchProduct className={styles.search} />

            <NavigationList className={styles.navlist} variant={NavigationListVariant.DESKTOP} />

            <HeaderLeft
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                className={styles.headerLeft}
            />

            <HeaderRight setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </div>
    )
}
