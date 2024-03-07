import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import { BrowserRouter } from "react-router-dom"
import * as redux from "react-redux"
import { ModalSlider } from "./ModalSlider"

const useSelectorMock = jest.spyOn(redux, "useSelector")

const testReducer = (state = {}) => state
const store = createStore(testReducer)

describe("ModalSlider", () => {
    beforeEach(() => {
        useSelectorMock.mockClear()
    })

    it("renders as a slider by default", () => {
        useSelectorMock.mockReturnValue(null)

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalSlider isOpen={true || false} onClose={() => {}}>
                        <div>Slider Content</div>
                    </ModalSlider>
                </BrowserRouter>
            </Provider>
        )

        expect(screen.getByText("Slider Content")).toBeInTheDocument()
        const sliderContent = screen.getByText("Slider Content")
        const parent = sliderContent.parentElement
        const grandparent = parent?.parentElement
        expect(grandparent).toHaveClass("wrapper")
    })

    it("calls onClose when clicking outside content for slider variant", () => {
        const handleClose = jest.fn()
        useSelectorMock.mockReturnValue(null)

        render(
            <Provider store={store}>
                <BrowserRouter>
                    <ModalSlider isOpen={true || false} onClose={handleClose}>
                        <div>Slider Content</div>
                    </ModalSlider>
                </BrowserRouter>
            </Provider>
        )

        const sliderContent = screen.getByText("Slider Content")
        const parent = sliderContent.parentElement
        const grandparent = parent?.parentElement
        if (grandparent) {
            fireEvent.click(grandparent)
        }
        expect(handleClose).toHaveBeenCalledTimes(1)
    })
})
