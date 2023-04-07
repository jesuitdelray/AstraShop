import { Sidebar } from "shared/ui/Sidebar/Sidebar"
import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { ModalSlider, ModalsList, getModalsCurrent, modalsActions } from "entities/ModalSlider"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"
import { filterListsData as list } from "../model/lists"
import styles from "./ProductFilters.module.scss"

interface FilterProductsProps {
    className?: string
}

export function FilterProducts({ className }: FilterProductsProps) {
    const content = (
        <div>
            <PriceFilter />
            {list.map(item => (
                <CheckboxGroup key={item.id} list={item.list} title={item.title} />
            ))}
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
