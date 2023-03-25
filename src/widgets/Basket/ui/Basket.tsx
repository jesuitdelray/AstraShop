import { OrderInfo } from "entities/OrderInfo"
import { CrossIcon } from "shared/assets/icons/others"
import { ModalSlider, ModalSliderVariant } from "shared/ui/ModalSlider/ModalSlider"
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
    const isSlideTop = window.innerWidth < 769

    return (
        <ModalSlider
            isOpen={isOpen}
            onClose={onClose}
            variant={isSlideTop ? ModalSliderVariant.TOP : ModalSliderVariant.RIGHT}
            className={styles.wrapper}
        >
            <div className={styles.container}>
                <div className={styles.slideRightHeader}>
                    <CrossIcon onClick={onClose} className={styles.cross} />
                    <Typography variant={TypographyVariant.H3} className={styles.slideRightTitle}>
                        Корзина
                    </Typography>
                </div>

                {basketItemsList.length ? (
                    <>
                        <BasketItemsList list={basketItemsList} />
                        <OrderInfo />
                    </>
                ) : (
                    <EmptyBasket onClose={onClose} />
                )}
            </div>
        </ModalSlider>
    )
}
