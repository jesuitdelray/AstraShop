import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyColor, TypographyVariant } from "shared/ui/Typography/Typography"
import img from "shared/assets/images/banners/image4.png"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./Banner.module.scss"

interface BannerProps {
    className?: string
    isMain?: boolean
    title: string
    desc: string
    img: any
}

export function Banner(props: BannerProps) {
    const { className, isMain = false, title, desc, img } = props

    return (
        <div className={classNames(styles.wrapper, { [styles.main]: isMain }, [className])}>
            <div className={styles.content}>
                <Typography
                    variant={TypographyVariant.H1}
                    color={TypographyColor.INVERTED}
                    className={styles.title}
                >
                    {title}
                </Typography>
                {isMain && (
                    <Typography color={TypographyColor.INVERTED} className={styles.description}>
                        {desc}
                    </Typography>
                )}
                {isMain ? (
                    <Button variant={ButtonVariant.FILLED_RED} className={styles.btn}>
                        Смотреть
                    </Button>
                ) : (
                    <Button variant={ButtonVariant.CLEAR_INVERTED}>Смотреть товары</Button>
                )}
            </div>
            <img src={img} alt="" className={styles.img} />
        </div>
    )
}
