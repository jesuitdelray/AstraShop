import { ReactElement } from "react"
import { Label } from "shared/ui/Label/Label"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { AsyncImage } from "shared/ui/AsyncImage"
import { useTranslation } from "react-i18next"
import { ImageFit } from "shared/ui/AsyncImage/AsyncImage"
import styles from "./ProductCard.module.scss"
import { Product } from "../../model/types"

interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    isTop?: boolean
    discount?: any
    className?: string
}

export const ProductCard = (props: ProductCardProps) => {
    const {
        id,
        is_new: isNew,
        isTop,
        discount,
        images,
        className,
        name,
        price,
        currency = "$",
        Basket,
    } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder
    const { t } = useTranslation()
    const navigate = useNavigate()

    const newPrice = price - (price * discount) / 100

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(`${RoutePath.product_details}/${id}`)}
        >
            <div className={styles.header}>
                {!!isNew && !isTop && (
                    <Label value={`${t("newProductLabel")}`} className={styles.label} />
                )}
                {!isNew && !!isTop && <Label value="TOP" className={styles.label} />}
                <AsyncImage
                    objectFit={ImageFit.COVER}
                    className={styles.image}
                    src={productImage}
                />
            </div>
            <div className={styles.footer}>
                <Typography className={styles.footerDescription}>{name}</Typography>
                <div className={styles.price}>
                    {!discount ? (
                        <Typography className={styles.footerPrice} isBold>
                            {`${currency} ${price.toLocaleString()}`}
                        </Typography>
                    ) : (
                        <>
                            <Typography
                                variant={TypographyVariant.SMALL}
                                color={TypographyColor.DARK_GRAY}
                                className={styles.priceDiscount}
                            >
                                <s>{`${currency} ${price.toLocaleString()}`}</s>
                            </Typography>
                            <Label value={`${discount}%`} className={styles.discountLabel} />
                            <Typography isBold className={styles.priceDiscount}>
                                {`${currency} ${newPrice.toLocaleString()}`}
                            </Typography>
                        </>
                    )}
                </div>
                {Basket}
            </div>
        </div>
    )
}
