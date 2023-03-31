import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { DeleteBucketIcon, MinusIcon, PlusIcon } from "shared/assets/icons/others"
import styles from "./ProductCardBasket.module.scss"

interface ProductCardBasketProps {
    img?: string
    productName: string
    productPrice: string
}

export function ProductCardBasket(props: ProductCardBasketProps) {
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
            <div className={styles.counter}>
                <MinusIcon className={styles.icon} />
                <Typography variant={TypographyVariant.P}>1</Typography>
                <PlusIcon className={styles.icon} />
            </div>
            <DeleteBucketIcon className={styles.delete} />
        </div>
    )
}
