import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getSortProductsOrder } from "features/SortProducts"
import { addQueryParams } from "shared/lib/url/addQueryParams/addQueryParams"
import { SubCategoryPageSchema } from "../../types/subcategoryPageSchema"

export const fetchCategoryProducts = createAsyncThunk<
    SubCategoryPageSchema,
    string | undefined,
    ThunkConfig<string>
>("subcategoryPage/fetchCategoryProducts", async (id, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const orderBy = getSortProductsOrder(getState())

    try {
        const params = {}
        if (orderBy) {
            addQueryParams({ orderBy })
            params.orderBy = orderBy
        }

        const response = await extra.api.get(`category/${id}/products`, {})

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
