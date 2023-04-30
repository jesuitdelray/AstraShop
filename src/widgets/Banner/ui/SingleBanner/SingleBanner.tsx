import { useNavigate } from "react-router-dom"
import { singleBannerList as slides } from "widgets/Banner/const/lists"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { useState } from "react"
import styles from "./SingleBanner.module.scss"

interface ISingleBannerProps {
    imgIndex: number
    className?: string
}

export function SingleBanner({ imgIndex, className }: ISingleBannerProps) {
    const banner = slides[imgIndex]

    const [current, setCurrent] = useState(0)

    const navigate = useNavigate()

    if (!banner) return null

    const { link, img } = banner

    return (
        <div
            className={classNames(styles.container, {}, [className])}
            onClick={() => {
                navigate(link)
            }}
        >
            <img src={img} alt="" className={styles.img} />
            <div className={styles.cta}>
                <Button variant={ButtonVariant.FILLED_RED} onClick={() => navigate(link)}>
                    Click
                </Button>
            </div>
        </div>
    )
}
