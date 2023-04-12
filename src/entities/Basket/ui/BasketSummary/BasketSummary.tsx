import { modalsActions } from "entities/ModalSlider"
import { useDispatch, useSelector } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import {
    getBasketProducts,
    getBasketProductsTotalPrice,
    getBasketProductsTotalQuantity,
} from "entities/Basket/model/selectors/basketSelectors"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./BasketSummary.module.scss"

export enum BasketSummaryVariant {
    DEFAULT = "default",
    VERTICAL = "vertical",
}

interface BasketSummaryProps {
    isCentered?: boolean
    className?: string
    variant?: BasketSummaryVariant
    onOrderClick: () => void
    onExitClick?: () => void
}

export function BasketSummary(props: BasketSummaryProps) {
    const {
        isCentered = false,
        className,
        variant = BasketSummaryVariant.DEFAULT,
        onOrderClick,
        onExitClick,
    } = props

    const dispatch = useDispatch()

    function closeModalHandler() {
        dispatch(modalsActions.close())
    }

    function orderClickHandler() {
        closeModalHandler()
        onOrderClick?.()
    }

    function exitClickHandler() {
        closeModalHandler()
        onExitClick?.()
    }

    const totalPrice = useSelector(getBasketProductsTotalPrice)
    const totalQuantity = useSelector(getBasketProductsTotalQuantity)

    const currency = "$"

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
                    {`${totalPrice} ${currency}`}
                </Typography>
                <Typography variant={TypographyVariant.H4}>Количество товаров</Typography>
                <Typography className={styles.totalProducts}>{totalQuantity}</Typography>
            </div>
            <div className={styles.buttons}>
                <Button onClick={orderClickHandler} variant={ButtonVariant.FILLED_RED}>
                    Подтвердить заказ
                </Button>
                <Button onClick={exitClickHandler}>Продолжить покупки</Button>
            </div>
        </div>
    )
}
