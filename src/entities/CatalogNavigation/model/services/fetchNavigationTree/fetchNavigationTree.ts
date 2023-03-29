import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema"
import axios from "axios"
import { navigationTreeType } from "../../types/list"

export const fetchNavigationTree = createAsyncThunk<navigationTreeType, void, ThunkConfig<string>>(
    "catalogNavigation/fetchNavigationTree",
    async (props, thunkApi) => {
        try {
            const response = await axios.get("https://developed-by.me:3000/api/v1/category/tree")

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue("error")
        }
    }
)
