import { OrderInfo } from "entities/OrderIfo"
import { CrossIcon } from "shared/assets/icons/others"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { ModalSlider, ModalSliderVariant } from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import { basketItemsList } from "../model/list"
import styles from "./Basket.module.scss"
import { BasketItemsList } from "./BasketItemsList/BasketItemsList"

interface BasketProps {
    isOpen: boolean
    onClose: () => void
}

export function Basket({ isOpen, onClose }: BasketProps) {
    return (
        <>
            <ModalSlider isOpen={isOpen} onClose={onClose} className={styles.slideTop}>
                <div className={styles.slideTopContainer}>
                    {basketItemsList.length ? (
                        <>
                            <BasketItemsList list={basketItemsList} />
                            <OrderInfo />
                        </>
                    ) : (
                        <Typography
                            variant={TypographyVariant.H3}
                            color={TypographyColor.DARK_GRAY}
                        >
                            Пусто
                        </Typography>
                    )}
                </div>
            </ModalSlider>
            <ModalSlider
                isOpen={isOpen}
                onClose={onClose}
                variant={ModalSliderVariant.RIGHT}
                className={styles.slideRight}
            >
                <div className={styles.slideRightContainer}>
                    <CrossIcon onClick={onClose} className={styles.cross} />
                    <Typography variant={TypographyVariant.H3} className={styles.slideRightTitle}>
                        Корзина
                    </Typography>

                    {basketItemsList.length ? (
                        <>
                            <BasketItemsList list={basketItemsList} />
                            <OrderInfo />
                        </>
                    ) : (
                        <div className={styles.emptyBasketContainer}>
                            <Typography
                                variant={TypographyVariant.H3}
                                color={TypographyColor.DARK_GRAY}
                                className={styles.emptyBasketText}
                            >
                                Пусто
                            </Typography>
                            <Button
                                className={styles.btn}
                                variant={ButtonVariant.FILLED_RED}
                                onClick={onClose}
                            >
                                Продолжить покупки
                            </Button>
                        </div>
                    )}
                </div>
            </ModalSlider>
        </>
    )
}
