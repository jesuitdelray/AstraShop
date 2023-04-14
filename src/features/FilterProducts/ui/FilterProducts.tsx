import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { ModalSlider, ModalsList, getModalsCurrent, modalsActions } from "entities/ModalSlider"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Logo } from "entities/Logo/Logo"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"
import styles from "./FilterProducts.module.scss"
import { getProductFilters } from "../model/selectors/subcategoryPageSelectors"
import { FilterItemAttribute, FilterItemPriceRange } from "../model/types/types"

interface FilterProductsProps {
    className?: string
    onChangeFilters: () => void
}

export function FilterProducts({ className, onChangeFilters }: FilterProductsProps) {
    const data = useSelector(getProductFilters) || []

    const content = (
        <div className={styles.sidebarContainer}>
            {data.map(item => {
                if (item.type === "price_range") {
                    const range = item.info as FilterItemPriceRange
                    return (
                        <PriceFilter
                            key={item.id}
                            title={item.name}
                            range={range}
                            onChangeFilters={onChangeFilters}
                        />
                    )
                }
                return null
            })}
            {data.map(item => {
                if (item.type === "attributes") {
                    const range = item.info as FilterItemAttribute[]
                    return (
                        <CheckboxGroup
                            key={item.id}
                            list={range}
                            title={item.name}
                            onChangeFilters={onChangeFilters}
                        />
                    )
                }
                return null
            })}
        </div>
    )

    const dispatch = useDispatch()
    const currentModal = useSelector(getModalsCurrent)

    function onClose() {
        dispatch(modalsActions.close())
    }

    return (
        <>
            <ModalSlider
                isOpen={currentModal === ModalsList.FILTERS}
                onClose={onClose}
                className={classNames(styles.modal, {}, [className])}
            >
                {content}
                <Button variant={ButtonVariant.FILLED_RED} className={styles.btn} onClick={onClose}>
                    Применить
                </Button>
            </ModalSlider>

            <div className={classNames(styles.sidebarWrapper, {}, [className])}>
                <div className={styles.container}>
                    <Logo className={styles.logo} />
                    {content}
                </div>
            </div>
        </>
    )
}
