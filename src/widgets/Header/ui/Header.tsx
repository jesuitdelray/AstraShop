import { SearchProduct } from "features/SearchProduct"
import { NavigationList, NavigationListVariant } from "entities/NavigationList"
import styles from "./Header.module.scss"
import { HeaderLeft } from "./HeaderLeft/HeaderLeft"
import { HeaderRight } from "./HeaderRight/HeaderRight"

interface HeaderProps {
    modalOpen: string
    setModalOpen: (value: string) => void
}

export function Header({ modalOpen, setModalOpen }: HeaderProps) {
    return (
        <div className={styles.container}>
            <SearchProduct className={styles.search} />

            <HeaderLeft
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                className={styles.headerLeft}
            />

            <NavigationList className={styles.navlist} variant={NavigationListVariant.DESKTOP} />

            <HeaderRight setModalOpen={setModalOpen} modalOpen={modalOpen} />
        </div>
    )
}
