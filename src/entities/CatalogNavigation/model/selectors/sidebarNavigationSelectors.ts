import { StateSchema } from "app/providers/StoreProvider"

export const getNavigationTree = (state: StateSchema) => state.catalogNavigation?.tree
export const getNavigationTreeError = (state: StateSchema) => state.catalogNavigation?.error
export const getCurrentTree = (state: StateSchema) => state.catalogNavigation?.currentTree
