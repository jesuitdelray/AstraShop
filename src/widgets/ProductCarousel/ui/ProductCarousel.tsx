import { ProductCard, ProductCardProps } from "entities/ProductCard"
import Slider from "react-slick"
import { classNames } from "shared/lib/classNames/classNames"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import { ProductCardList } from "../model/list"
import { sliderSettings } from "./sliderSettings"
import styles from "./ProductCarousel.module.scss"

export enum ProductCarouselVariant {
    TOP_PRODUCTS = "top",
    NEW_PRODUCTS = "new",
}

interface ProductCarouselProps {
    className?: string
    variant: ProductCarouselVariant
}

export const ProductCarousel = (props: ProductCarouselProps) => {
    const { variant, className } = props

    let title
    let list: ProductCardProps[]

    switch (variant) {
        case ProductCarouselVariant.NEW_PRODUCTS:
            title = "Новые поступления"
            list = ProductCardList
            break
        case ProductCarouselVariant.TOP_PRODUCTS:
            title = "Топовые позиции"
            list = ProductCardList
            break
        default:
            title = "Топовые позиции"
            list = []
    }

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.title}>{title}</div>
            <Slider {...sliderSettings}>
                {list.map((props: ProductCardProps) => {
                    const { id, ...rest } = props
                    return <ProductCard key={id} {...rest} />
                })}
            </Slider>
        </div>
    )
}
