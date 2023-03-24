import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./ProductDescription.module.scss"
import { ProductImages } from "./ProductImages/ProductImages"
import { productImagesList, productDescriptionData } from "../model/lists"
import { ProductInfo } from "./ProductInfo/ProductInfo"

export function ProductDescription() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Typography variant={TypographyVariant.H3} className={styles.title}>
                    Yamaha YSP-5600 Black
                </Typography>
                <Typography color={TypographyColor.ACCENT} className={styles.isPresent}>
                    В наличии
                </Typography>
                <Typography
                    variant={TypographyVariant.H2}
                    color={TypographyColor.DARK_GRAY}
                    className={styles.price}
                >
                    1931 грн
                </Typography>
            </div>
            <ProductImages list={productImagesList} className={styles.images} />
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                В корзину
            </Button>
            <ProductInfo className={styles.description} data={productDescriptionData} />
        </div>
    )
}
