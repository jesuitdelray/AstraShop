import { ProductCardBasket } from "entities/Product"
import { basketItemsType } from "../../model/list"
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
                    return <ProductCardBasket key={id} {...rest} />
                })}
        </div>
    )
}
