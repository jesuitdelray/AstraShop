/* import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { Product } from "../../types/basketSchema"

export const fetchProductDetails = createAsyncThunk<
    Product,
    string | undefined,
    ThunkConfig<string>
>("productDetails/fetchProductDetails", async (id, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get(`product/${id}`)

        if (!response.data) {
            throw new Error()
        }

        return response.data
    } catch (error) {
        return rejectWithValue("error")
    }
})
 */
