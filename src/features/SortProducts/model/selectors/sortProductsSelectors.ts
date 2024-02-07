import { StateSchema } from "app/providers/StoreProvider"

export const getSortProductsOrder = (state: StateSchema) => state.sortProducts?.order
