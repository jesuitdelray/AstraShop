import { useNavigate } from "react-router-dom"
import { singleBannerList } from "widgets/Banner/const/lists"
import { classNames } from "shared/lib/classNames/classNames"
import styles from "./SingleBanner.module.scss"

interface ISingleBannerProps {
    imgIndex: number
    className?: string
}

export function SingleBanner({ imgIndex, className }: ISingleBannerProps) {
    const banner = singleBannerList[imgIndex]

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
        </div>
    )
}
