import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import styles from "./ProductPriceInfo.module.scss"

export function ProductPriceInfo() {
    return (
        <div className={styles.container}>
            <Typography className={styles.productName} variant={TypographyVariant.H2} isBold>
                Ultra mega top watchezz
            </Typography>
            <Typography className={styles.stock} color={TypographyColor.ACCENT}>
                In stock
            </Typography>
            <Typography variant={TypographyVariant.H2} className={styles.price} isBold>
                $38.000
            </Typography>
            <div className={styles.btnContainer}>
                <Button variant={ButtonVariant.FILLED_RED}>Add to cart</Button>
                <Button variant={ButtonVariant.OUTLINE}>buy now</Button>
            </div>
        </div>
    )
}
