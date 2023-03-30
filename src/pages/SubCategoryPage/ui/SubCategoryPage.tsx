import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumbs } from "entities/Breadcrumbs"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { SortProducts } from "features/SortProducts"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { ProductCard } from "entities/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { ProductFilters } from "./ProductFilters/ProductFilters"
import styles from "./SubCategoryPage.module.scss"
import { fetchCategoryProducts } from "../model/services/fetchCategoryProducts/fetchCategoryProducts"
import {
    getSubCategoryError,
    getSubCategoryLoading,
    getSubCategoryName,
    getSubCategoryProducts,
} from "../model/selectors/subcategoryPageSelectors"

export function SubCategoryPage() {
    const [sortingPattern, setSortingPattern] = useState("")
    const breadcrumbsList = [AppRoutes.CATALOG, AppRoutes.CATEGORY, AppRoutes.SUB_CATEGORY]
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoryProducts(id))
    }, [dispatch, id])

    const categoryName = useSelector(getSubCategoryName)
    const categoryProducts = useSelector(getSubCategoryProducts)
    const categoryRequestLoading = useSelector(getSubCategoryLoading)
    const categoryRequestError = useSelector(getSubCategoryError)

    let content

    switch (true) {
        case categoryRequestLoading:
            content = <div>Loading...</div>
            break
        case !!categoryRequestError:
            content = <div>Error</div>
            break
        case categoryProducts?.length === 0:
            content = <div>No Products</div>
            break
        case categoryProducts?.length > 0 && !!categoryName:
            content = (
                <>
                    <Typography variant={TypographyVariant.H3} className={styles.title}>
                        {categoryName}
                    </Typography>
                    <SortProducts
                        sortingPattern={sortingPattern}
                        setSortingPattern={setSortingPattern}
                        className={styles.desktopFilters}
                    />
                    <ProductFilters className={styles.mobileFilters} />

                    <div className={styles.products}>
                        {!!categoryProducts.length &&
                            categoryProducts.map(item => {
                                const { id, is_new: isNew, images, name, price } = item
                                return (
                                    <ProductCard
                                        key={id}
                                        id={id?.toString()}
                                        isNew={isNew}
                                        name={name}
                                        images={images}
                                        price={price}
                                    />
                                )
                            })}
                    </div>
                    <Button variant={ButtonVariant.OUTLINE} className={styles.btn}>
                        Показать еще товар
                    </Button>
                </>
            )
            break
        default:
            content = <div>Error</div>
    }

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} />
            {content}
        </div>
    )
}
