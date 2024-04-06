import { render, fireEvent } from "@testing-library/react"
import { Modal } from "./Modal"

describe("Modal", () => {
    it("renders without crashing when isOpen is true", () => {
        render(
            <Modal isOpen onClose={() => {}}>
                Modal Content
            </Modal>
        )
    })

    it("calls onClose when overlay is clicked", () => {
        const onCloseMock = jest.fn()
        const { getByTestId } = render(
            <Modal isOpen onClose={onCloseMock}>
                Modal Content
            </Modal>
        )
        fireEvent.click(getByTestId("overlay"))
        expect(onCloseMock).toHaveBeenCalled()
    })

    it("renders children inside content area", () => {
        const { getByText } = render(
            <Modal isOpen onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>
        )
        expect(getByText("Modal Content")).toBeInTheDocument()
    })
})
