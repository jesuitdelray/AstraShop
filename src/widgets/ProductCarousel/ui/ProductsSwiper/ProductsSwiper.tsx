/* eslint-disable react/jsx-indent */
/* eslint-disable indent */

import { Product, ProductCard, ProductCardSkeleton } from "entities/Product"
import { classNames } from "shared/lib/classNames/classNames"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
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
}

export function ProductsSwiper(props: IProductSwiperProps) {
    const { isLoading, list, variant } = props

    return (
        <Swiper
            slidesPerView="auto"
            className={classNames(styles.swiper, {}, ["productCarousel"])}
            pagination={{
                clickable: true,
                el: styles.paginationEl,
            }}
            modules={[Pagination]}
            spaceBetween={20}
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
