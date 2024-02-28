import { render } from "react-dom"
import { act } from "react-dom/test-utils"
import { OrderPage } from "./OrderPage"
import { modalsActions } from "entities/ModalSlider"
import { basketActions } from "entities/Basket"

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}))

jest.mock("react-router-dom", () => ({
    useSearchParams: jest.fn().mockReturnValue({
        get: jest.fn().mockReturnValue("success"),
    }),
}))

jest.mock("entities/ModalSlider", () => ({
    modalsActions: {
        openSuccess: jest.fn(),
        openPaymentError: jest.fn(),
    },
}))

jest.mock("entities/Basket", () => ({
    basketActions: {
        clearBasket: jest.fn(),
    },
}))

describe("OrderPage Component Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("renders OrderPage and dispatches actions on payment success", () => {
        act(() => {
            render(<OrderPage />)
        })

        expect(modalsActions.openSuccess).toHaveBeenCalledTimes(1)
        expect(basketActions.clearBasket).toHaveBeenCalledTimes(1)
        expect(modalsActions.openPaymentError).not.toHaveBeenCalled()
    })
})
