import { useCallback, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { ChevronLeft, ChevronRight } from "shared/assets/icons/others"
import { bannerSliderList as slides } from "../../const/lists"
import { SLIDER_DELAY } from "../../const/const"
import styles from "./BannerSlider.module.scss"

export function BannerSlider() {
    const [isAutoScroll, setIsAutoScroll] = useState(true)
    const [current, setCurrent] = useState(0)

    const navigate = useNavigate()

    const paginate = useCallback(
        (direction: "left" | "right") => {
            if (direction === "right") {
                setCurrent(prev => (current === slides.length - 1 ? 0 : prev + 1))
            }

            if (direction === "left") {
                setCurrent(prev => (current === 0 ? slides.length - 1 : prev - 1))
            }
        },
        [current]
    )

    useEffect(() => {
        const timeout = isAutoScroll ? setTimeout(() => paginate("right"), SLIDER_DELAY) : null

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isAutoScroll, paginate])

    function paginationClickHandler(index: number) {
        setIsAutoScroll(false)
        setCurrent(index)
    }

    function navigationClickHandler(direction: "left" | "right") {
        setIsAutoScroll(false)
        paginate(direction)
    }

    return (
        <div className={styles.container}>
            {slides.map(({ img }, index) => {
                if (current === index) {
                    // return <div className={styles.img} style={{ backgroundImage: `url(${img})` }} />
                    return <div className={styles.img} />
                }
                return null
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

            <div className={styles.navigation}>
                <ChevronLeft onClick={() => navigationClickHandler("left")} />
                <ChevronRight onClick={() => navigationClickHandler("right")} />
            </div>

            <div className={styles.cta}>
                <Button
                    variant={ButtonVariant.FILLED_RED}
                    onClick={() => navigate(slides[current].link)}
                    className={styles.btn}
                >
                    Explore
                </Button>
            </div>
        </div>
    )
}
