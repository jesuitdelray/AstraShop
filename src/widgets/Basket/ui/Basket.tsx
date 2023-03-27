import { StateSchema } from "app/providers/StoreProvider"
import { OrderInfo } from "entities/OrderInfo"
import { modalActions, CurrentModalTypes } from "processes/Modals"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { CrossIcon } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { ModalSlider, ModalSliderVariant } from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { basketItemsList } from "../model/list"
import styles from "./Basket.module.scss"
import { BasketItemsList } from "./BasketItemsList/BasketItemsList"
import { EmptyBasket } from "./EmptyBasket/EmptyBasket"

export function Basket() {
    const isSlideTop = window.innerWidth < 769

    const value = useSelector((state: StateSchema) => state.modals.current)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    function onClose() {
        dispatch(modalActions.close())
    }

    return (
        <ModalSlider
            isOpen={value === CurrentModalTypes.BASKET}
            onClose={onClose}
            variant={isSlideTop ? ModalSliderVariant.TOP : ModalSliderVariant.RIGHT}
            className={styles.wrapper}
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
                        <OrderInfo
                            onOrderClick={() => navigate(RoutePath.order)}
                            onExitClick={onClose}
                        />
                    </>
                ) : (
                    <EmptyBasket onClose={onClose} />
                )}
            </div>
        </ModalSlider>
    )
}
