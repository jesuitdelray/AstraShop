import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductCardBasket.module.scss"

interface ProductCardBasketProps {
    img?: string
    productName: string
    productPrice: string
    Delete: any
    Counter: any
}

export function ProductCardBasket(props: ProductCardBasketProps) {
    const { img, productName, productPrice, Delete, Counter } = props

    return (
        <div className={styles.container}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P}>{productName}</Typography>
                <Typography variant={TypographyVariant.H3} isBold>
                    {productPrice}
                </Typography>
            </div>
            <div className={styles.counter}>{Counter}</div>
            {Delete}
        </div>
    )
}
