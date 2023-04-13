import { memo, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Product, ProductCard } from "entities/Product"
import { classNames } from "shared/lib/classNames/classNames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/scss/scrollbar"
import { useTranslation } from "react-i18next"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import styles from "./ProductCarousel.module.scss"
import { fetchTopProducts } from "../model/services/fetchTopProducts/fetchTopProducts"
import { fetchNewProducts } from "../model/services/fetchNewProducts/fetchNewProducts"
import {
    getProductCarouselErrorNew,
    getProductCarouselErrorTop,
    getProductCarouselLoadingNew,
    getProductCarouselLoadingTop,
    getProductCarouselNewProducts,
    getProductCarouselTopProducts,
} from "../model/selectors/productCarouselSelector"

export enum ProductCarouselVariant {
    TOP_PRODUCTS = "top",
    NEW_PRODUCTS = "new",
}

interface ProductCarouselProps {
    className?: string
    variant: ProductCarouselVariant
}

export const ProductCarousel = memo((props: ProductCarouselProps) => {
    const { variant, className } = props

    const { t } = useTranslation()

    const dispatch = useDispatch()

    const topProducts = useSelector(getProductCarouselTopProducts)
    const newProducts = useSelector(getProductCarouselNewProducts)
    const isLoadingTop = useSelector(getProductCarouselLoadingTop)
    const isLoadingNew = useSelector(getProductCarouselLoadingNew)
    const errorTop = useSelector(getProductCarouselErrorTop)
    const errorNew = useSelector(getProductCarouselErrorNew)

    const isNew = variant === ProductCarouselVariant.NEW_PRODUCTS
    const isTop = variant === ProductCarouselVariant.TOP_PRODUCTS

    useEffect(() => {
        if (isNew && !newProducts?.length && !isLoadingNew && !errorNew) {
            dispatch(fetchNewProducts())
        } else if (isTop && !topProducts?.length && !isLoadingTop && !errorTop) {
            dispatch(fetchTopProducts())
        }
    }, [
        dispatch,
        newProducts,
        topProducts,
        isLoadingNew,
        isLoadingTop,
        isNew,
        isTop,
        variant,
        errorNew,
        errorTop,
    ])

    const title = isNew ? t("productsNewProducts") : t("productsTopProducts")
    const list: Product[] | undefined = isNew ? newProducts : topProducts
    const loading = isNew ? isLoadingNew : isLoadingTop
    const error = isNew ? errorNew : errorTop

    const content = useMemo(() => {
        switch (true) {
            case loading:
                return <div>{t("loadingProcessLoading")}</div>
            case !!error:
                return <div>{t("error")}</div>
            case !!list?.length:
                return (
                    <>
                        <div className={styles.title}>{title}</div>
                        <Swiper
                            slidesPerView={1}
                            className={styles.swiper}
                            pagination={{ clickable: true }}
                            modules={[Pagination]}
                            spaceBetween={30}
                            breakpoints={{
                                480: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1300: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            {list?.map(item => {
                                const { id, is_new: isNew, name, price, images } = item
                                return (
                                    <SwiperSlide key={id}>
                                        <ProductCard
                                            id={id}
                                            is_new={isNew}
                                            name={name}
                                            price={price}
                                            images={images}
                                            Basket={
                                                <ToggleProductInBasket
                                                    variant={ToggleProductInBasketVariant.ICON}
                                                    product={item}
                                                />
                                            }
                                            className={styles.product}
                                        />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </>
                )
            default:
                return null
        }
    }, [list, loading, title, error, t])

    return (
        <div className={classNames(styles.container, {}, [className, "productCarousel"])}>
            {content}
        </div>
    )
})
