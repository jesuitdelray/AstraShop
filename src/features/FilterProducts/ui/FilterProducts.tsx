import { useEffect } from "react"
import { Sidebar } from "shared/ui/Sidebar/Sidebar"
import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { ModalSlider, ModalsList, getModalsCurrent, modalsActions } from "entities/ModalSlider"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"
import styles from "./FilterProducts.module.scss"
import {
    getProductFilters,
    getProductFiltersPriceRange,
} from "../model/selectors/subcategoryPageSelectors"

interface FilterProductsProps {
    className?: string
    onChangeFilters: () => void
}

export function FilterProducts({ className, onChangeFilters }: FilterProductsProps) {
    const data: any[] = useSelector(getProductFilters) || []

    const content = (
        <div>
            {data.map(item => {
                if (item.type === "price_range") {
                    return (
                        <PriceFilter
                            key={item.id}
                            groupId={item.id}
                            title={item.name}
                            range={item.info}
                            onChangeFilters={onChangeFilters}
                        />
                    )
                }
                if (item.type === "attributes") {
                    return (
                        <CheckboxGroup
                            key={item.id}
                            groupId={item.id}
                            list={item.info}
                            title={item.name}
                            onChangeFilters={onChangeFilters}
                        />
                    )
                }
                return null
            })}
            {/* <PriceFilter />
            {list.map(item => (
                <CheckboxGroup key={item.id} list={item.list} title={item.title} />
            ))} */}
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

            <Sidebar className={classNames("", {}, [className])}>{content}</Sidebar>
        </>
    )
}
