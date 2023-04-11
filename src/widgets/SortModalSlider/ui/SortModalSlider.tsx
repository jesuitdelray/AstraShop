import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { SortProducts } from "features/SortProducts"
import { Button } from "shared/ui/Button/Button"
import styles from "./SortModalSlider.module.scss"

interface SortModalSliderProps {
    onChangeSort: () => void
}

export function SortModalSlider({ onChangeSort }: SortModalSliderProps) {
    const currentModal = useSelector(getModalsCurrent)

    const dispatch = useDispatch()

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.SORT}
            onClose={() => dispatch(modalsActions.close())}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <SortProducts onChangeSort={onChangeSort} className={styles.desktopFilters} />

                <Button onClick={() => dispatch(modalsActions.close())}>Применить</Button>
            </div>
        </ModalSlider>
    )
}
