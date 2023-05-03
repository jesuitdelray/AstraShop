import { useEffect, useState } from "react"
import { Swiper as SwiperClass } from "swiper/types"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { ChevronLeft, ChevronRight } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { useDispatch, useSelector } from "react-redux"
import { SaleCountdown } from "features/SaleCountdown"
import { IProductSwiperVariant, ProductsSwiper } from "../ProductsSwiper/ProductsSwiper"
import styles from "./ProductsSale.module.scss"
import { fetchTopProducts } from "../../model/services/fetchTopProducts/fetchTopProducts"
import { getProductCarouselTopProducts } from "../../model/selectors/productCarouselSelector"

export function ProductsSale() {
    const [swiperRef, setSwiperRef] = useState<SwiperClass>()
    const [isHovered, setIsHovered] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTopProducts())
    }, [dispatch])

    const topProducts = useSelector(getProductCarouselTopProducts)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <Typography variant={TypographyVariant.H2} className={styles.title}>
                        Sale
                    </Typography>
                    <SaleCountdown />
                </div>
                <div
                    className={styles.swiperContainer}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <ProductsSwiper
                        isLoading={false}
                        list={topProducts || []}
                        variant={IProductSwiperVariant.WITH_BANNER}
                        slidesPerView={1}
                        className={styles.swiper}
                        onSwiper={setSwiperRef}
                        isWithPagination
                    />

                    <ChevronLeft
                        className={classNames(styles.chevronLeft, {
                            [styles.chevronVisible]: isHovered,
                        })}
                        onClick={() => swiperRef?.slidePrev()}
                    />

                    <ChevronRight
                        className={classNames(styles.chevronRight, {
                            [styles.chevronVisible]: isHovered,
                        })}
                        onClick={() => swiperRef?.slideNext()}
                    />
                </div>
            </div>
        </div>
    )
}
