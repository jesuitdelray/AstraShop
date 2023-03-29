import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SortProducts } from "features/SortProducts"
import { Button } from "shared/ui/Button/Button"
import styles from "./SortModalSlider.module.scss"

export function SortModalSlider() {
    const currentModal = useSelector(getModalsCurrent)
    const [sortingPattern, setSortingPattern] = useState("")

    const dispatch = useDispatch()

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.SORT}
            onClose={() => dispatch(modalsActions.close())}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <SortProducts
                    sortingPattern={sortingPattern}
                    setSortingPattern={setSortingPattern}
                    className={styles.desktopFilters}
                />
                <Button onClick={() => dispatch(modalsActions.close())}>Применить</Button>
            </div>
        </ModalSlider>
    )
}
