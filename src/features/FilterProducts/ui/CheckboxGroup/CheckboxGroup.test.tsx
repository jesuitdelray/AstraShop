import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { CheckboxGroup } from "./CheckboxGroup"

const mockStore = createStore(() => ({}))

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}))

jest.mock("shared/lib/url/deleteQueryParams/deleteQueryParams", () => ({
    deleteQueryParams: jest.fn(),
}))

describe("CheckboxGroup", () => {
    const mockOnChangeFilters = jest.fn()

    it("renders correctly with list items", () => {
        const { getByText } = render(
            <Provider store={mockStore}>
                <CheckboxGroup
                    title="Test Title"
                    list={[{ id: 1, name: "Item 1" }]}
                    onChangeFilters={mockOnChangeFilters}
                />
            </Provider>
        )

        expect(getByText("Item 1")).toBeInTheDocument()
    })
})
