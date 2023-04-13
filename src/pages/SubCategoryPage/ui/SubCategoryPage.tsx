import { useCallback, useEffect, useMemo } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { SortProducts, sortProductsOrderType } from "features/SortProducts"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { RoutePath } from "shared/config/routeConfig/const"
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useDispatch, useSelector } from "react-redux"
import { SortModalSlider } from "widgets/SortModalSlider"
import { ProductCard, ProductCardSkeleton } from "entities/Product"
import { Skeleton } from "shared/ui/Skeleton/Skeleton"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { FilterProducts } from "features/FilterProducts"
import { fetchCategoryFilters } from "features/FilterProducts/model/services/fetchCategoryFilters/fetchCategoryFilters"
import {
    Breadcrumbs,
    getNavigationTree,
    catalogNavigationActions,
    CurrentTreeItemType,
} from "entities/CatalogNavigation"
import { useTranslation } from "react-i18next"
import { ProductFilters } from "./ProductFilters/ProductFilters"
import styles from "./SubCategoryPage.module.scss"
import { fetchCategoryProducts } from "../model/services/fetchCategoryProducts/fetchCategoryProducts"
import {
    getSubCategoryError,
    getSubCategoryLoading,
    getSubCategoryName,
    getSubCategoryParentId,
    getSubCategoryProducts,
} from "../model/selectors/subcategoryPageSelectors"
import { subcategoryPageActions } from "../model/slice/subcategoryPageSlice"
import { fetchFilteredProducts } from "../model/services/fetchFilteredProducts/fetchFilteredProducts"
import { initCategoryProducts } from "../model/services/initCategoryProducts/initCategoryProducts"
import { NoProducts } from "./NoProducts/NoProducts"
import { UnexpectedError } from "./UnexpectedError/UnexpectedError"

export function SubCategoryPage() {
    const { id } = useParams()

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (id !== undefined) {
            dispatch(initCategoryProducts({ searchParams, id }))
        }
    }, [searchParams, dispatch, id])

    const fetchSortedData = useCallback(() => {
        dispatch(fetchCategoryProducts(id))
        dispatch(fetchCategoryFilters(id))
    }, [dispatch, id])

    const categoryName = useSelector(getSubCategoryName)
    const categoryProducts = useSelector(getSubCategoryProducts)
    const categoryRequestLoading = useSelector(getSubCategoryLoading)
    const categoryRequestError = useSelector(getSubCategoryError)
    const parentCategoryId = useSelector(getSubCategoryParentId)

    useEffect(() => {
        if (!categoryRequestError) {
            fetchSortedData()
        }
    }, [fetchSortedData, categoryRequestError])

    const navigationTree = useSelector(getNavigationTree)

    const getCategoryName = useCallback(
        () =>
            navigationTree.filter(item => parentCategoryId && +parentCategoryId === item.id)?.[0]
                ?.name || "Category",
        [navigationTree, parentCategoryId]
    )

    useEffect(() => {
        dispatch(
            catalogNavigationActions.setCurrentTree([
                {
                    id: parentCategoryId,
                    name: getCategoryName(),
                    type: CurrentTreeItemType.CATEGORY,
                },
                {
                    id: id !== undefined ? +id : 0,
                    name: categoryName,
                    type: CurrentTreeItemType.SUB_CATEGORY,
                },
            ])
        )
    }, [categoryName, parentCategoryId, dispatch, id, getCategoryName])

    function onChangeFilters() {
        dispatch(fetchFilteredProducts())
    }

    const content = useMemo(() => {
        switch (true) {
            case categoryRequestLoading:
                return (
                    <>
                        <Skeleton height={28} width={200} border="5px" className={styles.title} />
                        <SortProducts
                            className={styles.desktopFilters}
                            onChangeSort={fetchSortedData}
                        />
                        <ProductFilters className={styles.mobileFilters} />
                        <div className={styles.products}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
                                <ProductCardSkeleton key={item} />
                            ))}
                        </div>
                    </>
                )
            case !!categoryRequestError:
                if (categoryRequestError === "Category not found") {
                    navigate(RoutePath.not_found)
                    return null
                }
                return <UnexpectedError />
            case categoryProducts?.length === 0:
                return (
                    <NoProducts
                        onReturnClick={() => navigate(`${RoutePath.category}/${parentCategoryId}`)}
                    />
                )
            case categoryProducts?.length > 0 && !!categoryName:
                return (
                    <>
                        <Typography variant={TypographyVariant.H3} className={styles.title}>
                            {categoryName}
                        </Typography>
                        <SortProducts
                            className={styles.desktopFilters}
                            onChangeSort={fetchSortedData}
                        />
                        <ProductFilters className={styles.mobileFilters} />

                        <div className={styles.products}>
                            {!!categoryProducts.length &&
                                categoryProducts.map(product => {
                                    const { id, is_new: isNew, images, name, price } = product
                                    return (
                                        <ProductCard
                                            key={id}
                                            id={id}
                                            is_new={isNew}
                                            name={name}
                                            images={images}
                                            price={price}
                                            Basket={
                                                <ToggleProductInBasket
                                                    key={id}
                                                    variant={ToggleProductInBasketVariant.ICON}
                                                    product={product}
                                                />
                                            }
                                        />
                                    )
                                })}
                        </div>
                        {/* <Button variant={ButtonVariant.OUTLINE} className={styles.btn}>
                            {t("showMoreProducts")}
                        </Button> */}
                    </>
                )
            default:
                return <UnexpectedError />
        }
    }, [
        categoryName,
        categoryProducts,
        categoryRequestLoading,
        categoryRequestError,
        fetchSortedData,
        navigate,
        parentCategoryId,
    ])

    return (
        <>
            <SortModalSlider onChangeSort={fetchSortedData} />
            <div className={styles.wrapper}>
                <FilterProducts className={styles.sidebar} onChangeFilters={() => null} />
                <Breadcrumbs />
                {content}
            </div>
        </>
    )
}
