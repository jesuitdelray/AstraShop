import { Product, ProductCardBasket } from "entities/Product"
import { ChangeProductAmountInBasket, RemoveProductFromBasket } from "features/basketFeatures"
import { basketItemsType } from "../../model/list"
import styles from "./BasketItemsList.module.scss"

interface BasketItemsListProps {
    list: Product[]
}

export function BasketItemsList({ list }: BasketItemsListProps) {
    return (
        <div className={styles.container}>
            {!!list &&
                list.map((item: any) => {
                    const { id, name, price, ...rest } = item
                    return (
                        <ProductCardBasket
                            key={id}
                            {...rest}
                            name={name}
                            price={price}
                            Delete={<RemoveProductFromBasket product={item} />}
                            Counter={<ChangeProductAmountInBasket id={id} />}
                        />
                    )
                })}
        </div>
    )
}
