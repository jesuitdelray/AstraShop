import { getModalsCurrent, modalsActions, ModalSlider, ModalsList } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"

export function SortModalSlider() {
    const currentModal = useSelector(getModalsCurrent)

    const dispatch = useDispatch()

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.SORT}
            onClose={() => dispatch(modalsActions.close())}
        >
            123
        </ModalSlider>
    )
}
