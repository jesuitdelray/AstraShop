import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { SortProducts } from "features/SortProducts"
import { Button } from "shared/ui/Button/Button"
import styles from "./SortModalSlider.module.scss"

export interface SortModalSliderProps {
    onChangeSort: () => void
}

export function SortModalSlider({ onChangeSort }: SortModalSliderProps) {
    const currentModal = useSelector(getModalsCurrent)

    const dispatch = useDispatch()

    function changeSortHandler() {
        onChangeSort?.()
        dispatch(modalsActions.close())
    }

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.SORT}
            onClose={() => dispatch(modalsActions.close())}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <SortProducts onChangeSort={changeSortHandler} className={styles.desktopFilters} />
            </div>
        </ModalSlider>
    )
}
