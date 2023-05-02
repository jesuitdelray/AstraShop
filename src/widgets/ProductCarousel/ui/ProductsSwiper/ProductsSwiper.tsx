/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import { Dispatch, SetStateAction } from "react"
import { Product, ProductCard, ProductCardSkeleton } from "entities/Product"
import { classNames } from "shared/lib/classNames/classNames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperClass } from "swiper/types"
import { Pagination, Navigation } from "swiper"
import "swiper/scss"
import "swiper/scss/navigation"
import "swiper/scss/pagination"
import "swiper/scss/scrollbar"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import styles from "./ProductSwiper.module.scss"

export enum IProductSwiperVariant {
    FULL = "full",
    WITH_BANNER = "with_banner",
}

interface IProductSwiperProps {
    isLoading: boolean
    list: Product[]
    variant: IProductSwiperVariant
    slidesPerView?: number
    className?: string
    isWithPagination?: boolean
    onSwiper?: Dispatch<SetStateAction<SwiperClass | undefined>>
}

export function ProductsSwiper(props: IProductSwiperProps) {
    const {
        isLoading,
        list,
        variant,
        slidesPerView,
        className,
        onSwiper,
        isWithPagination = false,
    } = props

    const modules = (() => {
        switch (true) {
            case isLoading:
                return []
            case isWithPagination:
                return [Pagination, Navigation]
            case !isWithPagination:
                return [Navigation]
            default:
                return []
        }
    })()

    return (
        <Swiper
            slidesPerView={slidesPerView || "auto"}
            className={classNames(styles.swiper, {}, [className, "productCarousel"])}
            pagination={{
                clickable: true,
                el: styles.paginationEl,
            }}
            modules={modules}
            navigation={{ prevEl: "#prevEl", nextEl: "#nextEl" }}
            spaceBetween={20}
            onSwiper={onSwiper}
        >
            {isLoading
                ? [1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                      <SwiperSlide key={item}>
                          <ProductCardSkeleton />
                      </SwiperSlide>
                  ))
                : list?.map(item => {
                      const { id, is_new: isNew, name, price, images } = item
                      return (
                          <SwiperSlide key={id} className={styles.slide}>
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

            <div
                className={classNames(styles.paginationEl, {}, [
                    "swiper-pagination swiper-pagination-timeline-page",
                ])}
            />
        </Swiper>
    )
}
