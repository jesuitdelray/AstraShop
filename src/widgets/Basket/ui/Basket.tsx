import { CrossIcon } from "shared/assets/icons/others"
import { ModalSlider, ModalSliderVariant } from "shared/ui/ModalSlider/ModalSlider"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./Basket.module.scss"

export function Basket({ isOpen, onClose }: any) {
    return (
        <>
            <ModalSlider isOpen={isOpen} onClose={onClose} className={styles.slideModal}>
                <div className={styles.slideContainer}>
                    <Typography variant={TypographyVariant.H3} color={TypographyColor.DARK_GRAY}>
                        Пусто
                    </Typography>
                </div>
            </ModalSlider>
            <ModalSlider
                isOpen={isOpen}
                onClose={onClose}
                variant={ModalSliderVariant.RIGHT}
                className={styles.normalModal}
            >
                <CrossIcon onClick={onClose} />
                <Typography variant={TypographyVariant.H3} color={TypographyColor.DARK_GRAY}>
                    Пусто
                </Typography>
            </ModalSlider>
        </>
    )
}
