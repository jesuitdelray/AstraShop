import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Contacts } from "./Contacts"
import styles from "./Contacts.module.scss"

jest.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: any) => key,
    }),
}))

describe("Contacts", () => {
    it("renders correctly", () => {
        const { container } = render(<Contacts />)
        expect(screen.getByText("Contacts")).toBeInTheDocument()
        expect(screen.getByText("(093) 892-22-26")).toBeInTheDocument()
        expect(screen.getByText("(096) 997-50-58")).toBeInTheDocument()
        expect(screen.getByText("tovar-7km.office@gmail.com")).toBeInTheDocument()
        expect(container.getElementsByClassName(styles.title).length).toBe(1)
        expect(container.getElementsByClassName(styles.column).length).toBe(1)
    })
})
