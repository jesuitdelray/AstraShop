import { ReactElement } from "react"
import { Label } from "shared/ui/Label/Label"
import { Typography } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { useTranslation } from "react-i18next"
import styles from "./ProductCardSkeleton.module.scss"
import { Product } from "../../model/types"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { AddToBasket } from "shared/assets/icons/others"

interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    className?: string
}

export const ProductCardSkeleton = (props: ProductCardProps) => {
    const { id, is_new: isNew, images, className, name, price, currency = "$", Basket } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(`${RoutePath.product_details}/${id}`)}
        >
            <div className={styles.header}>
                <Skeleton width="100%" />
            </div>
            <div className={styles.footer}>
                <Skeleton width="150px" height={18} />
                <div className={styles.price}>
                    <Skeleton width="75px" height={18} />
                </div>
            </div>
        </div>
    )
}
