import { Sidebar } from "shared/ui/Sidebar/Sidebar"
import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { ModalSlider, ModalsList, getModalsCurrent, modalsActions } from "entities/ModalSlider"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { CheckboxGroup } from "./CheckboxGroup/CheckboxGroup"
import { PriceFilter } from "./PriceFilter/PriceFilter"
import { filterListsData as list } from "../model/lists"
import styles from "./FilterProducts.module.scss"
import { getProductFilters } from "../model/selectors/subcategoryPageSelectors"

interface FilterProductsProps {
    className?: string
}

export function FilterProducts({ className }: FilterProductsProps) {
    const data: any[] = useSelector(getProductFilters) || []

    const content = (
        <div>
            {data.map(item => {
                if (item.type === "price_range") {
                    return <PriceFilter />
                }
                if (item.type === "attributes") {
                    return (
                        <CheckboxGroup
                            key={item.id}
                            groupId={item.id}
                            list={item.info}
                            title={item.name}
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
