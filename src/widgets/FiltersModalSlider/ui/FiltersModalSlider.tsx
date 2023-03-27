import { ProductFilters } from "features/ProductFilters"
import { modalActions, modalSlice } from "processes/Modals/model/slice/modalsSlice"
import { CurrentModalTypes } from "processes/Modals/model/types/modalsSchema"
import { useDispatch, useSelector } from "react-redux"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import styles from "./FiltersModalSlider.module.scss"

export function FiltersModalSlider() {
    const dispatch = useDispatch()
    //@ts-ignore
    const value = useSelector(state => state.modals.current)

    function onClose() {
        dispatch(modalActions.close())
    }

    return (
        <ModalSlider
            isOpen={value === CurrentModalTypes.FILTERS}
            onClose={onClose}
            className={styles.wrapper}
        >
            <ProductFilters className={styles.filters} />
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn} onClick={onClose}>
                Применить
            </Button>
        </ModalSlider>
    )
}
