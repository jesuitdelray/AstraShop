import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getProductFilters } from "features/FilterProducts/model/selectors/subcategoryPageSelectors"
import { SubCategoryPageSchema } from "../../types/subcategoryPageSchema"

export const fetchFilteredProducts = createAsyncThunk<
    SubCategoryPageSchema,
    string | undefined,
    ThunkConfig<string>
>("subcategoryPage/fetchFilteredProducts", async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi

    const filters = getProductFilters(getState())
    const query = null

    // window.history.pushState(null, "", `?${query}`)

    try {
        const response = await extra.api.get(`category/filters/${query}`)
        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error: any) {
        if (error.response?.status === 404) {
            return rejectWithValue("Category filteres not found")
        }

        return rejectWithValue("unexpected error")
    }
})
