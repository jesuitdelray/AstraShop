import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider"
import { getBasketProducts } from "entities/Basket"
import { IFormData } from "../../types/types"
import { SubmitOrderSchema } from "../../types/submitOrderSchema"

export const createNewOrder = createAsyncThunk<SubmitOrderSchema, IFormData, ThunkConfig<string>>(
    "submitOrder/createNewOrder",
    async (formData, thunkApi) => {
        const { extra, getState, rejectWithValue } = thunkApi

        const basketProducts = getBasketProducts(getState())
        const orderData = basketProducts.map(item => ({ id: item.id, quantity: item.quantity }))

        try {
            const response = await extra.api.post("/order", { order: orderData })

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            return rejectWithValue("Unexpected error")
        }
    }
)
