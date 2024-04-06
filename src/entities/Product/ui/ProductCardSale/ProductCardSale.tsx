import { ReactElement } from "react"
import { Typography } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { AsyncImage, ImageFit } from "shared/ui/AsyncImage"
import { useTranslation } from "react-i18next"
import { Product } from "../../model/types"
import styles from "./ProductCardSale.module.scss"

export interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    className?: string
}

export const ProductCardSale = (props: ProductCardProps) => {
    const { id, is_new: isNew, images, className, name, price, currency = "$", Basket } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder
    const { t } = useTranslation()
    const navigate = useNavigate()

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(`${RoutePath.product_details}/${id}`)}
            data-testid="product-card-sale"
        >
            <div className={styles.header} data-testid="product-header">
                {/* {!!isNew && <Label value={`${t("newProductLabel")}`} className={styles.label} />} */}
                <AsyncImage
                    objectFit={ImageFit.CONTAIN}
                    className={styles.image}
                    src={productImage}
                    data-testid="product-image"
                />
            </div>
            <div className={styles.footer} data-testid="product-footer">
                <Typography className={styles.footerDescription} data-testid="product-name">
                    {name}
                </Typography>
                <div className={styles.price} data-testid="product-price-container">
                    <Typography className={styles.footerPrice} isBold data-testid="product-price">
                        {`${currency} ${price.toLocaleString()}`}
                    </Typography>
                    {Basket}
                </div>
            </div>
        </div>
    )
}
