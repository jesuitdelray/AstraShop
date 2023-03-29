import { StateSchema } from "app/providers/StoreProvider"

export const getNavigationTree = (state: StateSchema) => state.sidebarNavigation.tree
