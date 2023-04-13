import { useDispatch, useSelector } from "react-redux"
import { ShoppingBagIcon } from "shared/assets/icons/others"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import {
    getModalsCurrent,
    modalsActions,
    ModalSlider,
    ModalSliderVariant,
    ModalsList,
} from "entities/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./SuccessOrderModal.module.scss"

export function SuccessOrderModal() {
    const isSlideTop = window.innerWidth < 769

    const dispatch = useDispatch()
    const value = useSelector(getModalsCurrent)

    const isOpen = value === ModalsList.SUCCESS

    function onClose() {
        dispatch(modalsActions.close())
    }

    return (
        <ModalSlider
            isOpen={isOpen}
            onClose={onClose}
            className={isSlideTop ? styles.sliderWrapper : styles.wrapper}
            variant={isSlideTop ? ModalSliderVariant.SLIDER : ModalSliderVariant.MODAL}
        >
            <ShoppingBagIcon className={styles.shoppingBag} />
            <Typography
                className={styles.title}
                variant={isSlideTop ? TypographyVariant.H3 : TypographyVariant.H1}
            >
                Успешная оплата
            </Typography>
            <Typography className={styles.text} variant={TypographyVariant.P}>
                Детали заказа и чек отправлены Вам на почту
            </Typography>
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                Вернуться
            </Button>
        </ModalSlider>
    )
}
