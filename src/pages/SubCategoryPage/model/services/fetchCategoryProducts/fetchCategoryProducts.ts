import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getSortProductsOrder } from "features/SortProducts"
import { getProductFiltersPriceRange, getProductFiltersAttributes } from "features/FilterProducts"
import { addQueryParams, deleteQueryParams } from "shared/lib/url/addQueryParams/addQueryParams"
import { SubCategoryPageSchema } from "../../types/subcategoryPageSchema"

export const fetchCategoryProducts = createAsyncThunk<
    SubCategoryPageSchema,
    string | undefined,
    ThunkConfig<string>
>("subcategoryPage/fetchCategoryProducts", async (id, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const orderBy = getSortProductsOrder(getState())
    const priceRange = getProductFiltersPriceRange(getState())
    const filterAttributes = getProductFiltersAttributes(getState())

    try {
        const params = {}
        if (orderBy) {
            addQueryParams({ orderBy })
            params.orderBy = orderBy
        }

        if (priceRange) {
            const { min, max } = priceRange
            const price = `${min}-${max}`

            addQueryParams({ price })
            params.price = price
        }

        if (filterAttributes && filterAttributes.length) {
            const attr = filterAttributes.join(",")

            addQueryParams({ attr })
            params.attr = attr
        }

        const response = await extra.api.get(`category/${id}/products`, { params })

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error: any) {
        if (error.response?.status === 404) {
            return rejectWithValue("Category not found")
        }

        return rejectWithValue("Unexpected error")
    }
})
