import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./OrderInfo.module.scss"

export enum OrderInfoVariant {
    DEFAULT = "default",
    VERTICAL = "vertical",
}

interface OrderInfoProps {
    isCentered?: boolean
    className?: string
    variant?: OrderInfoVariant
}

export function OrderInfo(props: OrderInfoProps) {
    const { isCentered = false, className, variant = OrderInfoVariant.DEFAULT } = props

    return (
        <div
            className={classNames(styles.container, { [styles.centered]: isCentered }, [
                className,
                styles[variant],
            ])}
        >
            <div className={styles.info}>
                <Typography variant={TypographyVariant.H4} isBold>
                    Итого
                </Typography>
                <Typography isBold className={styles.totalPrice}>
                    103 832 грн
                </Typography>
                <Typography variant={TypographyVariant.H4}>Количество товаров</Typography>
                <Typography className={styles.totalProducts}>3</Typography>
            </div>
            <div className={styles.buttons}>
                <Button variant={ButtonVariant.FILLED_RED}>Подтвердить заказ</Button>
                <Button>Продолжить покупки</Button>
            </div>
        </div>
    )
}
