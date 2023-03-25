import { ProductCard, ProductCardProps } from "entities/ProductCard"
import Slider, { Settings, ResponsiveObject } from "react-slick"
import { v4 as uuid4 } from "uuid"
import { classNames } from "shared/lib/classNames/classNames"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import { ProductCardList } from "../model/list"
import styles from "./ProductCarousel.module.scss"

export enum ProductCarouselVariant {
    TOP_PRODUCTS = "top",
    NEW_PRODUCTS = "new",
}

interface IProductCarouselProps extends Settings {
    className?: string
    variant: ProductCarouselVariant
}
type ProductCarouselProps = Readonly<IProductCarouselProps>
type ResponsiveSettings = ResponsiveObject[]

export const ProductCarousel = (props: ProductCarouselProps) => {
    const {
        variant,
        className,
        dots = true,
        slidesToShow = 5,
        slidesToScroll = 1,
        infinite = true,
        speed = 500,
        swipeToSlide = true,
        autoplaySpeed = 3000,
        autoplay = true,
        arrows = false,
        dotsClass = styles.buttonBar,
        ...rest
    } = props

    const settings: ResponsiveSettings = [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
    ]

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
            <Slider
                dots={dots}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                infinite={infinite}
                speed={speed}
                autoplaySpeed={autoplaySpeed}
                autoplay={autoplay}
                arrows={arrows}
                swipeToSlide={swipeToSlide}
                dotsClass={dotsClass}
                responsive={settings}
                {...rest}
            >
                {list.map((props: ProductCardProps) => {
                    const { id, onClick, ...rest } = props
                    return (
                        <ProductCard
                            key={id || uuid4()}
                            {...rest}
                            onClick={() => console.log(props)}
                        />
                    )
                })}
            </Slider>
        </div>
    )
}
