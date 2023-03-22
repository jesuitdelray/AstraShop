import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./OrderInfo.module.scss"

interface OrderInfoProps {
    isCentered?: boolean
    className?: string
}

export function OrderInfo(props: OrderInfoProps) {
    const { isCentered = false, className } = props

    return (
        <div
            className={classNames(styles.container, { [styles.centered]: isCentered }, [className])}
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
