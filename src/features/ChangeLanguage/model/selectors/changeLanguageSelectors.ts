import { StateSchema } from "app/providers/StoreProvider"

export const getStorageLanguage = (state: StateSchema) => state.changeLanguage.language
