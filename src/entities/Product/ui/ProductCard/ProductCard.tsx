import { ReactElement } from "react"
import { Label } from "shared/ui/Label/Label"
import { Typography } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import styles from "./ProductCard.module.scss"

export interface ProductCardProps {
    id?: string
    isNew?: boolean
    className?: string
    images?: string[]
    name: string
    price: number
    currency?: string
}

export const ProductCard = (props: ProductCardProps): ReactElement => {
    const { isNew, images, className, id, name, price, currency = "$" } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder

    const navigate = useNavigate()

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(RoutePath.product_details + 9)} // has to be + id
        >
            <div className={styles.header}>
                {!!isNew && <Label value="новый" className={styles.label} />}
                <img className={styles.image} src={productImage} alt="" decoding="async" />
            </div>
            <div className={styles.footer}>
                <Typography className={styles.footerDescription}>{name}</Typography>
                <Typography className={styles.footerPrice} isBold>
                    {price}
                    {currency}
                </Typography>
            </div>
        </div>
    )
}
