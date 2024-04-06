import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { CatalogPage } from "./CatalogPage"

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
}))

jest.mock("react-i18next", () => ({
    ...jest.requireActual("react-i18next"),
    useTranslation: () => ({
        t: jest.fn(),
    }),
}))

jest.mock("entities/CatalogNavigation", () => ({
    CatalogLinks: jest.fn(() => <div data-testid="catalog-links" />),
}))

jest.mock("widgets/ProductCarousel", () => ({
    ProductsRow: jest.fn(() => <div data-testid="products-row" />),
}))

jest.mock("widgets/Banner", () => ({
    BannersRow: jest.fn(() => <div data-testid="banners-row" />),
}))

describe("CatalogPage component", () => {
    let store: any

    beforeEach(() => {
        const rootReducer = combineReducers({
            catalog: () => ({}),
        })
        store = createStore(rootReducer, {})
    })

    it("renders all necessary components", () => {
        render(
            <Provider store={store}>
                <CatalogPage />
            </Provider>
        )

        expect(screen.getByTestId("catalog-links")).toBeInTheDocument()
        expect(screen.getByTestId("products-row")).toBeInTheDocument()
        expect(screen.getByTestId("banners-row")).toBeInTheDocument()
    })
})
