import styles from "widgets/ProductCard/ui/ProductCarousel/ProductCarousel.module.scss"
import { ProductCard, ProductCardProps } from "widgets/ProductCard/ui/ProductCard/ProductCard"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"
import { v4 as uuid4 } from "uuid"

interface IProductCarouselProps extends Settings {
    list?: ProductCardProps[],
    className?: string,
    title?: string,
}

type ProductCarouselProps = Readonly<IProductCarouselProps>

export const ProductCarousel = (props: ProductCarouselProps) => {
    const {
        title,
        list = [],
        className,
        dots = true,
        slidesToShow = 5,
        slidesToScroll = 1,
        infinite = true,
        speed = 500,
        autoplaySpeed = 3000,
        autoplay = true,
        arrows = false,
        dotsClass = styles.button__bar,
        ...rest
    } = props

    return (
        <div className={className}>
            {!!title && <div className={styles.title}>{title}</div>}
            <Slider
                dots={dots}
                slidesToShow={slidesToShow}
                slidesToScroll={slidesToScroll}
                infinite={infinite}
                speed={speed}
                autoplaySpeed={autoplaySpeed}
                autoplay={autoplay}
                arrows={arrows}
                dotsClass={dotsClass}
                {...rest}
            >
                {list.map((item: ProductCardProps) => (
                    <div key={uuid4()} className={styles.slideContainer}>
                        <ProductCard {...item} onClick={() => console.log(item)} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
