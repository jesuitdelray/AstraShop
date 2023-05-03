import { ReactElement } from "react"
import { Label, LabelColor } from "shared/ui/Label/Label"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { classNames } from "shared/lib/classNames/classNames"
import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import productPlaceholder from "shared/assets/images/productPlaceholder.jpg"
import { AsyncImage } from "shared/ui/AsyncImage"
import { useTranslation } from "react-i18next"
import { ProductRating } from "features/productCardFeatures"
import { ImageFit } from "shared/ui/AsyncImage/AsyncImage"
import styles from "./ProductCard.module.scss"
import { Product } from "../../model/types"

interface ProductCardProps extends Product {
    currency?: string
    Basket?: ReactElement
    isTop?: boolean
    discount?: number
    rating?: number
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
        rating,
        currency = "$",
        Basket,
    } = props
    const productImage = images?.[0] ? images[0] : productPlaceholder
    const { t } = useTranslation()
    const navigate = useNavigate()

    const newPrice = !!discount && price - (price * discount) / 100

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => navigate(`${RoutePath.product_details}/${id}`)}
        >
            <div className={styles.imageContainer}>
                <div className={styles.labelContainer}>
                    {!!isNew && (
                        <Label value={`${t("newProductLabel")}`} className={styles.label} />
                    )}
                    {!!isTop && (
                        <Label value="top" className={styles.label} color={LabelColor.ATTENTION} />
                    )}
                </div>
                <AsyncImage
                    objectFit={ImageFit.COVER}
                    className={styles.image}
                    src={productImage}
                />
            </div>
            <div className={styles.descriptionContainer}>
                <Typography className={styles.name}>{name}</Typography>
                <ProductRating rating={rating} className={styles.rating} />
                <div className={styles.priceContainer}>
                    {!discount ? (
                        <Typography className={styles.price} isBold>
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
                            <Typography isBold className={styles.newPrice}>
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
