import { ProductFilters } from "features/ProductFilters"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import styles from "./FiltersModalSlider.module.scss"

interface FiltersModalSliderProps {
    isOpen: boolean
    onClose: () => void
}

export function FiltersModalSlider(props: FiltersModalSliderProps) {
    const { isOpen, onClose } = props

    return (
        <ModalSlider isOpen={isOpen} onClose={onClose} className={styles.wrapper}>
            <ProductFilters className={styles.filters} />
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn} onClick={onClose}>
                Применить
            </Button>
        </ModalSlider>
    )
}
