import { render } from "@testing-library/react"
import { ContactsPage } from "./ContactsPage"

describe("ContactsPage component", () => {
    test("renders ContactsPage component with all child components", () => {
        const { getByText, getByTestId } = render(<ContactsPage />)

        expect(getByText("Contacts")).toBeInTheDocument()

        expect(getByTestId("schedule")).toBeInTheDocument()
        expect(getByTestId("contacts")).toBeInTheDocument()

        expect(getByTestId("products-row")).toBeInTheDocument()
        expect(getByTestId("banners-row")).toBeInTheDocument()
    })
})
