import { OrderInfo } from "entities/OrderInfo"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CrossIcon } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import {
    getModalsCurrent,
    modalsActions,
    ModalSlider,
    ModalSliderDirection,
    ModalsList,
} from "entities/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { basketItemsList } from "../model/list"
import styles from "./Basket.module.scss"
import { BasketItemsList } from "./BasketItemsList/BasketItemsList"
import { EmptyBasket } from "./EmptyBasket/EmptyBasket"

export function Basket() {
    const height = window.innerHeight
    const isSlideTop = window.innerWidth < 769

    const currentModal = useSelector(getModalsCurrent)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function onClose() {
        dispatch(modalsActions.close())
    }

    return (
        <ModalSlider
            isOpen={currentModal === ModalsList.BASKET}
            onClose={onClose}
            direction={isSlideTop ? ModalSliderDirection.TOP : ModalSliderDirection.RIGHT}
            className={styles.wrapper}
            containerHeight={isSlideTop ? `${height - 64}px` : "auto"}
        >
            <div className={styles.container}>
                <div className={styles.slideRightHeader}>
                    <Typography variant={TypographyVariant.H3} className={styles.slideRightTitle}>
                        Корзина
                    </Typography>
                    <CrossIcon onClick={onClose} className={styles.cross} />
                </div>

                {basketItemsList.length ? (
                    <>
                        <BasketItemsList list={basketItemsList} />
                        <OrderInfo onOrderClick={() => navigate(RoutePath.order)} />
                    </>
                ) : (
                    <EmptyBasket onClose={onClose} />
                )}
            </div>
        </ModalSlider>
    )
}
