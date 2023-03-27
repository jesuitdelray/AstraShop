import { OrderInfo } from "entities/OrderInfo"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CrossIcon } from "shared/assets/icons/others"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import {
    ModalSlider,
    ModalSliderVariant,
} from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { basketItemsList } from "../model/list"
import styles from "./Basket.module.scss"
import { BasketItemsList } from "./BasketItemsList/BasketItemsList"
import { EmptyBasket } from "./EmptyBasket/EmptyBasket"

interface BasketProps {
    isOpen: boolean
    onClose: () => void
}

export function Basket({ isOpen, onClose }: BasketProps) {
    const [basketHeight, setBasketHeight] = useState(window.innerHeight)
    useEffect(() => {
        setBasketHeight(window.innerHeight)
    }, [])

    const isSlideTop = window.innerWidth < 769

    const navigate = useNavigate()

    return (
        <ModalSlider
            isOpen={isOpen}
            onClose={onClose}
            variant={
                isSlideTop ? ModalSliderVariant.TOP : ModalSliderVariant.RIGHT
            }
            className={styles.wrapper}
            containerHeight={`${basketHeight - 64}px`}
        >
            <div
                className={styles.container}
                /* style={{ height: `${basketHeight}px` }} */
            >
                <div className={styles.slideRightHeader}>
                    <Typography
                        variant={TypographyVariant.H3}
                        className={styles.slideRightTitle}
                    >
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
