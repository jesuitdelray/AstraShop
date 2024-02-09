import { StateSchema } from "app/providers/StoreProvider"

export const getSubmitOrderError = (state: StateSchema) => state.submitOrder?.error
export const getSubmitOrderLoading = (state: StateSchema) => state.submitOrder?.isLoading
