import { render, screen } from "@testing-library/react"
import { CatalogPage } from "./CatalogPage"
import { Provider } from "react-redux"
import { act } from "react-dom/test-utils"
import { Suspense } from "react"
import { createStore, Store, AnyAction } from "redux"

const initialState = {
    navigationTree: [
        { id: 1, name: "Category 1", categories: [] },
        { id: 2, name: "Category 2", categories: [] },
    ],
    error: null,
}

function reducer(state = initialState, action: AnyAction) {
    return state
}

describe("CatalogPage Component", () => {
    it("renders page with correct content", async () => {
        const mockStore: Store<typeof initialState, AnyAction> = createStore(reducer)

        await act(async () => {
            render(
                <Provider store={mockStore}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <CatalogPage />
                    </Suspense>
                </Provider>
            )
        })

        expect(await screen.findByTestId("catalog-links")).toBeInTheDocument()
        expect(screen.getByTestId("products-row")).toBeInTheDocument()
        expect(screen.getByTestId("products-row")).toHaveTextContent("Products Row")
        expect(screen.getByTestId("banners-row")).toBeInTheDocument()
    })
})
