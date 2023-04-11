import { Banner, BannerColor, BannerVariant } from "entities/Banner"
import { useEffect, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from "react-i18next"
import { topBannerSlides as slides } from "../model/list"
import styles from "./TopBanner.module.scss"

const SLIDER_DELAY = 5000

export function TopBanner() {
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const [current, setCurrent] = useState(0)
    const { t } = useTranslation()

    useEffect(() => {
        function paginate() {
            if (isAutoScroll) {
                if (current === slides.length - 1) {
                    setCurrent(0)
                } else {
                    setCurrent(prev => prev + 1)
                }
            }
        }

        const timeout = isAutoScroll ? setTimeout(() => paginate(), SLIDER_DELAY) : null

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [current, isAutoScroll])

    function paginationClickHandler(index: number) {
        setIsAutoScroll(false)
        setCurrent(index)
    }

    return (
        <div className={styles.wrapper}>
            {slides.map((item, index) => {
                const { id, title, desc, img } = item
                return index === current ? (
                    <Banner
                        key={id}
                        variant={BannerVariant.TOP}
                        color={BannerColor.INVERTED}
                        img={img}
                        title={t(`topBannerTitle${id}`)}
                        desc={t(`topBannerDesc${id}`)}
                        className={styles.banner}
                    />
                ) : null
            })}
            <div className={styles.pagination}>
                {slides.map((item, index) => (
                    <div
                        key={item.id}
                        className={classNames(styles.bullet, {
                            [styles.active]: index === current,
                        })}
                        onClick={() => paginationClickHandler(index)}
                    />
                ))}
            </div>
        </div>
    )
}
