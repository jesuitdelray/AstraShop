import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SortProducts } from "features/SortProducts"
import styles from "./SortModalSlider.module.scss"

export function SortModalSlider() {
    const currentModal = useSelector(getModalsCurrent)
    const [sortingPattern, setSortingPattern] = useState("")

    const dispatch = useDispatch()

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.SORT}
            onClose={() => dispatch(modalsActions.close())}
        >
            <SortProducts
                sortingPattern={sortingPattern}
                setSortingPattern={setSortingPattern}
                className={styles.desktopFilters}
            />
        </ModalSlider>
    )
}
