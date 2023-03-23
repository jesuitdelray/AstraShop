import { ShoppingBagIcon } from "shared/assets/icons/others"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./SuccessOrder.module.scss"

export function OrderInfo() {
    return (
        <div className={styles.wrapper}>
            <ShoppingBagIcon className={styles.shoppingBag} />
            <div className={styles.info}>
                <Typography
                    className={styles.h1}
                    variant={TypographyVariant.H1}
                >
                    Спасибо за ваш заказ
                </Typography>
            </div>
            <div>
                <Typography className={styles.p} variant={TypographyVariant.P}>
                    Наш менеджер свяжется с Вами в ближайшее время и уточнит
                    детали заказа
                </Typography>
            </div>
            <div className={styles.button}>
                <Button variant={ButtonVariant.FILLED_RED}>
                    Подтвердить заказ
                </Button>
            </div>
        </div>
    )
}
