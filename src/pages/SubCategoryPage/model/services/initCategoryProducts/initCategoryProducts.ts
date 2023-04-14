import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { sortProductsAction, sortProductsOrderType } from "features/SortProducts"
import { fetchCategoryFilters } from "features/FilterProducts"
import { fetchCategoryProducts } from "../fetchCategoryProducts/fetchCategoryProducts"
import { subcategoryPageActions } from "../../slice/subcategoryPageSlice"
import { getSubCategoryInited } from "../../selectors/subcategoryPageSelectors"
import { filterProductsActions } from "features/FilterProducts/model/slice/filterProductsSlice"

interface InitCategoryProductsProps {
    searchParams: URLSearchParams
    id: string
}

export const initCategoryProducts = createAsyncThunk<
    void,
    InitCategoryProductsProps,
    ThunkConfig<string>
>("subcategoryPage/initCategoryProducts", async ({ searchParams, id }, thunkApi) => {
    const { dispatch, getState } = thunkApi

    const inited = getSubCategoryInited(getState())

    if (!inited) {
        const orderBy = searchParams.get("orderBy") as sortProductsOrderType
        const price = searchParams.get("price")
        const attr = searchParams.get("attr")

        if (orderBy) {
            dispatch(sortProductsAction.setOrder(orderBy))
        }

        if (price) {
            const [min, max] = price.split("-")
            dispatch(filterProductsActions.setPriceRange({ range: { min: +min, max: +max } }))
        }

        if (attr) {
            const attributes = attr.split(",").map(item => +item)
            dispatch(filterProductsActions.setFilterAttributes(attributes))
        }

        dispatch(subcategoryPageActions.initState())
        dispatch(fetchCategoryProducts(id))
        dispatch(fetchCategoryFilters(id))
    }
})
