import { classNames } from "shared/lib/classNames/classNames"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopProducts } from "../../model/services/fetchTopProducts/fetchTopProducts"
import { getProductCarouselTopProducts } from "../../model/selectors/productCarouselSelector"
import styles from "./BannerWithProductsRow.module.scss"
import img from "../../const/image31.jpg"
import { IProductSwiperVariant, ProductsSwiper } from "../ProductsSwiper/ProductsSwiper"

interface IBannerWithProductsRowProps {
    className?: string
    id: number
}

export function BannerWithProductsRow(props: IBannerWithProductsRowProps) {
    const { className, id } = props
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        dispatch(fetchTopProducts())
    }, [dispatch])

    const topProducts = useSelector(getProductCarouselTopProducts)

    const title = "Category Products"

    return (
        <div className={classNames(styles.container, {}, [className])}>
            <div className={styles.title}>{title}</div>
            <div className={styles.content}>
                <div className={styles.banner}>
                    <img src={img} alt="" />
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
                        isWithPagination={isHovered}
                    />
                </div>
            </div>
        </div>
    )
}
