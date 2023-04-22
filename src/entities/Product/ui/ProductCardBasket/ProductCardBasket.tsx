import { ReactElement } from "react"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { useNavigate } from "react-router-dom"
import styles from "./ProductCardBasket.module.scss"
import { Product } from "../../model/types"

interface ProductCardBasketProps extends Product {
    Delete: ReactElement
    Counter: ReactElement
    currency: string
    onProductClick?: (id: number) => void
}

export function ProductCardBasket(props: ProductCardBasketProps) {
    const { images = [], name, price, Delete, Counter, currency, id, onProductClick } = props
    const imgSrc = images?.[0] ? images[0] : productPlaceholder

    return (
        <div className={styles.container}>
            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
            <img src={imgSrc} alt="" className={styles.img} onClick={() => onProductClick?.(id)} />
            <div className={styles.info} onClick={() => onProductClick?.(id)}>
                <Typography variant={TypographyVariant.P} className={styles.productName}>{name}</Typography>
                <Typography variant={TypographyVariant.H3} isBold>
                    {`${price} ${currency}`}
                </Typography>
            </div>
            <div className={styles.counter}>{Counter}</div>
            {Delete}
        </div>
    )
}
