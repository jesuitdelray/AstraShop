import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { sortProductsAction } from "features/SortProducts"
import { fetchCategoryProducts } from "../fetchCategoryProducts/fetchCategoryProducts"

export const initCategoryProducts = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    "subcategoryPage/initCategoryProducts",
    async ({ searchParams, id }, thunkApi) => {
        const { getState, dispatch } = thunkApi
        // const inited = getArticlesPageInited(getState())

        const inited = false

        if (!inited) {
            const orderBy = searchParams.get("orderBy") as sortProductsOrderType

            if (orderBy) {
                dispatch(sortProductsAction.setOrder(orderBy))
            }

            dispatch(fetchCategoryProducts(id))
        }
    }
)
