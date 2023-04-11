import { useCallback, useEffect, useMemo } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { SortProducts } from "features/SortProducts"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { useDispatch, useSelector } from "react-redux"
import { FiltersModalSlider } from "widgets/FiltersModalSlider"
import { SortModalSlider } from "widgets/SortModalSlider"
import { ProductCard } from "entities/Product"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
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
import { initCategoryProducts } from "../model/services/initCategoryProducts/initCategoryProducts"

export function SubCategoryPage() {
    const { id } = useParams()

    const dispatch = useDispatch()

    const fetchSortedData = useCallback(() => {
        dispatch(fetchCategoryProducts(id))
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

    const { t } = useTranslation()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        if (id !== undefined) {
            dispatch(initCategoryProducts({ searchParams, id }))
        }
    }, [searchParams, dispatch, id])

    const content = useMemo(() => {
        switch (true) {
            case categoryRequestLoading:
                return <div>{t("loadingProcessLoading")}</div>
            case !!categoryRequestError:
                return <div>{categoryRequestError}</div>
            case categoryProducts?.length === 0:
                return <div>{t("loadingProcessNoProduct")}</div>
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
                        <Button variant={ButtonVariant.OUTLINE} className={styles.btn}>
                            {t("showMoreProducts")}
                        </Button>
                    </>
                )
            default:
                return <div>{t("loadingProcessUnexpectedError")}</div>
        }
    }, [
        categoryName,
        categoryProducts,
        categoryRequestLoading,
        categoryRequestError,
        t,
        fetchSortedData,
    ])

    return (
        <>
            <FiltersModalSlider />
            <SortModalSlider onChangeSort={fetchSortedData} />
            <div className={styles.wrapper}>
                <Breadcrumbs />
                {content}
            </div>
        </>
    )
}
