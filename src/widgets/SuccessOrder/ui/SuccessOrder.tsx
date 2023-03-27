import { StateSchema } from "app/providers/StoreProvider/config/StateSchema"
import { modalActions, CurrentModalTypes } from "processes/Modals"
import { useDispatch, useSelector } from "react-redux"
import { ShoppingBagIcon } from "shared/assets/icons/others"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Modal } from "shared/ui/Modal/Modal"
import { ModalSlider } from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./SuccessOrder.module.scss"

interface ContentProps {
    isSlideTop: boolean
}

function Content({ isSlideTop }: ContentProps) {
    return (
        <>
            <ShoppingBagIcon className={styles.shoppingBag} />
            <Typography
                className={styles.title}
                variant={isSlideTop ? TypographyVariant.H3 : TypographyVariant.H1}
            >
                Спасибо за ваш заказ
            </Typography>
            <Typography className={styles.text} variant={TypographyVariant.P}>
                Наш менеджер свяжется с Вами в ближайшее время и уточнит детали заказа
            </Typography>
            <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                Продолжить покупки
            </Button>
        </>
    )
}

export function SuccessOrder() {
    const isSlideTop = window.innerWidth < 769

    const dispatch = useDispatch()
    const value = useSelector((state: StateSchema) => state.modals.current)

    const isOpen = value === CurrentModalTypes.SUCCESS

    function onClose() {
        dispatch(modalActions.close())
    }

    return isSlideTop ? (
        <ModalSlider isOpen={isOpen} onClose={onClose} className={styles.sliderWrapper}>
            <Content isSlideTop={isSlideTop} />
        </ModalSlider>
    ) : (
        <Modal isOpen={isOpen} onClose={onClose} className={styles.wrapper}>
            <Content isSlideTop={isSlideTop} />
        </Modal>
    )
}
