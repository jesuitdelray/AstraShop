import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchNavigationTree = createAsyncThunk(
    "catalogNavigation/fetchNavigationTree",
    async (props, thunkApi) => {
        try {
            const response = await axios.get("https://developed-by.me:3000/api/v1/category/tree")

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            console.log(error)
            return thunkApi.rejectWithValue("error")
        }
    }
)
