import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { DeleteBucketIcon } from "shared/assets/icons/others"
import { BasketProductCounter } from "entities/BasketProductCounter"
import styles from "./BasketProduct.module.scss"

interface BasketProductProps {
    img?: string
    productName: string
    productPrice: string
}

export function BasketProduct(props: BasketProductProps) {
    const { img, productName, productPrice } = props

    return (
        <div className={styles.container}>
            <img src={img} alt="" className={styles.img} />
            <div className={styles.info}>
                <Typography variant={TypographyVariant.P}>{productName}</Typography>
                <Typography variant={TypographyVariant.H3} isBold>
                    {productPrice}
                </Typography>
            </div>
            <BasketProductCounter className={styles.counter} />
            <DeleteBucketIcon className={styles.delete} />
        </div>
    )
}
