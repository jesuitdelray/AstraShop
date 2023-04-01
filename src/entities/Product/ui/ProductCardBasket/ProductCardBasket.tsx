import { ReactElement } from "react"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductCardBasket.module.scss"
import { Product } from "../../model/types"

interface ProductCardBasketProps extends Product {
    Delete: ReactElement
    Counter: ReactElement
}

export function ProductCardBasket(props: ProductCardBasketProps) {
    const { images = [], name, price, Delete, Counter } = props

    return (
        <div className={styles.container}>
            {!!images?.[0] && <img src={images[0]} alt="" className={styles.img} />}
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P}>{name}</Typography>
                <Typography variant={TypographyVariant.H3} isBold>
                    {price}
                </Typography>
            </div>
            <div className={styles.counter}>{Counter}</div>
            {Delete}
        </div>
    )
}
