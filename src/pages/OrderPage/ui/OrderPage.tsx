import { modalsActions } from "entities/ModalSlider"
import { SubmitOrder } from "features/SubmitOrder"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { SuccessOrderModal } from "./SuccessOrderModal/SuccessOrderModal"
import { PaymentErrorModal } from "./PaymentErrorModal/PaymentErrorModal"

export function OrderPage() {
    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const payment = searchParams.get("payment")

        if (payment === "success") {
            dispatch(modalsActions.openSuccess())
        } else if (payment === "failure") {
            console.log("e")
            dispatch(modalsActions.openPaymentError())
        }
    }, [searchParams, dispatch])

    return (
        <>
            <SuccessOrderModal />
            <PaymentErrorModal />
            <div>
                <SubmitOrder />
                <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
                <BannersRow />
                <ProductCarousel variant={ProductCarouselVariant.NEW_PRODUCTS} />
            </div>
        </>
    )
}
