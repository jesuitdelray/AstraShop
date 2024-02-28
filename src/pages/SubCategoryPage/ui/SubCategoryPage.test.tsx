import { render } from "@testing-library/react"
import { SubCategoryPage } from "./SubCategoryPage"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { MemoryRouter } from "react-router-dom"

jest.mock("entities/CatalogNavigation", () => ({
    __esModule: true,
    Breadcrumbs: () => null,
}))

jest.mock("../model/selectors/subcategoryPageSelectors", () => ({
    __esModule: true,
    getSubCategoryName: jest.fn(),
    getSubCategoryProducts: jest.fn(),
    getSubCategoryLoading: jest.fn(),
    getSubCategoryError: jest.fn(),
    getSubCategoryParentId: jest.fn(),
}))

jest.mock("../lib/useSetBreadcrumbs", () => ({
    __esModule: true,
    useSetBreadcrumbs: jest.fn(() => {}),
}))

describe("SubCategoryPage", () => {
    const store = createStore(() => ({}))

    it("renders without crashing", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <SubCategoryPage />
                </MemoryRouter>
            </Provider>
        )
    })
})
