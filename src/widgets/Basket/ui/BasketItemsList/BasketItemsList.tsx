import { BasketProduct } from "features/BasketProduct"
import { basketItemsType } from "widgets/Basket/model/list"
import styles from "./BasketItemsList.module.scss"

interface BasketItemsListProps {
    list: basketItemsType[]
}

export function BasketItemsList({ list }: BasketItemsListProps) {
    return (
        <div className={styles.container}>
            {!!list &&
                list.map((item: basketItemsType) => {
                    const { id, ...rest } = item
                    return <BasketProduct key={id} {...rest} />
                })}
        </div>
    )
}
