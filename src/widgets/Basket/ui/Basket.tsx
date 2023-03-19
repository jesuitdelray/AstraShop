import { CrossIcon } from "shared/assets/icons/others"
import { ModalSlider, ModalSliderVariant } from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./Basket.module.scss"

interface BasketProps {
    isOpen: boolean
    onClose: () => void
}

export function Basket({ isOpen, onClose }: BasketProps) {
    return (
        <>
            <ModalSlider isOpen={isOpen} onClose={onClose} className={styles.slideTop}>
                <div className={styles.slideTopContainer}>
                    <Typography variant={TypographyVariant.H3} color={TypographyColor.DARK_GRAY}>
                        Пусто
                    </Typography>
                </div>
            </ModalSlider>
            <ModalSlider
                isOpen={isOpen}
                onClose={onClose}
                variant={ModalSliderVariant.RIGHT}
                className={styles.slideRight}
            >
                <CrossIcon onClick={onClose} className={styles.cross} />
                <Typography variant={TypographyVariant.H3} color={TypographyColor.DARK_GRAY}>
                    Пусто
                </Typography>
            </ModalSlider>
        </>
    )
}
