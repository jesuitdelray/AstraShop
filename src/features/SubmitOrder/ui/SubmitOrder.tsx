import { useSelector } from "react-redux"
import { useMemo } from "react"
import { OrderForm } from "./OrderForm/OrderForm"
import styles from "./SubmitOrder.module.scss"
import { getSubmitOrderError, getSubmitOrderLoading } from "../model/selectors/submitOrderSelectors"
import { ErrorOrderModal } from "./ErrorOrderModal/ErrorOrderModal"

export function SubmitOrder() {
    const error = useSelector(getSubmitOrderError)
    const isLoading = useSelector(getSubmitOrderLoading)

    const content = useMemo(() => {
        switch (true) {
            case isLoading:
                return <div>Loading...</div>
            case !!error:
                return <div>{error}</div>
            default:
                return <OrderForm />
        }
    }, [error, isLoading])

    return (
        <>
            <ErrorOrderModal />
            <div className={styles.wrapper}>{content}</div>
        </>
    )
}
