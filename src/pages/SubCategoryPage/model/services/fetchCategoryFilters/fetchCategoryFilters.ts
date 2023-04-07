import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { SubCategoryPageSchema } from "../../types/subcategoryPageSchema"

export const fetchCategoryFilters = createAsyncThunk<
    SubCategoryPageSchema,
    string | undefined,
    ThunkConfig<string>
>("subcategoryPage/fetchCategoryFilters", async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get(`category/${id}/filters`)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue("unexpected error")
    }
})
