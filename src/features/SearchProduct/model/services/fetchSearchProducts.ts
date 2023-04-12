import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { ProductListItem } from "../types/searchProductsSchema"

export const fetchSearchProducts = createAsyncThunk<
    ProductListItem[] | [],
    string | undefined,
    ThunkConfig<string>
>("searchProducts/fetchSearchProducts", async (value, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get(`/product/search?name=${value}`)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error: any) {
        return rejectWithValue("Unexpected error")
    }
})
