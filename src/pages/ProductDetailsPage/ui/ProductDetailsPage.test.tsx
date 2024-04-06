import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
    Breadcrumbs,
    CurrentTreeItemType,
    catalogNavigationActions,
} from "entities/CatalogNavigation"
import { BannersRow } from "widgets/Banner"
import { ProducstRowVariant, ProductsRow } from "widgets/ProductCarousel"
import { fetchProductDetails } from "../model/services/fetchProductDetails/fetchProductDetails"
import {
    getProductDetailsError,
    getProductDetailsName,
    getProductParents,
} from "../model/selectors/productDetailsSelectors"
import { ProductMenu } from "./ProductMenu/ProductMenu"

export const ProductDetailsPage: React.FC<any> = () => {
    const dispatch: any = useDispatch()
    const { id }: any = useParams()

    const productRequestError: any = useSelector(getProductDetailsError)
    const productName: any = useSelector(getProductDetailsName)
    const productParentsData: any = useSelector(getProductParents)

    useEffect(() => {
        if (!productRequestError) {
            dispatch(fetchProductDetails(id))
        }
    }, [dispatch, id, productRequestError])

    useEffect(() => {
        const parents: any =
            (productParentsData || []).map((parent: any) => ({
                id: parent.id,
                name: parent.name,
                type:
                    parent.parent_category_id === null
                        ? CurrentTreeItemType.CATEGORY
                        : CurrentTreeItemType.SUB_CATEGORY,
            })) || []

        dispatch(
            catalogNavigationActions.setCurrentTree([
                ...parents,
                {
                    id: id || "0",
                    name: productName || "Product",
                    type: CurrentTreeItemType.PRODUCT,
                },
            ])
        )
    }, [id, dispatch, productName, productParentsData])

    return (
        <div>
            <Breadcrumbs />
            <ProductMenu />
            <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
