import { OrderForm } from "./OrderForm/OrderForm"
import styles from "./SubmitOrder.module.scss"
import { SuccessOrderModal } from "./SuccessOrderModal/SuccessOrderModal"
import { ErrorOrderModal } from "./ErrorOrderModal/ErrorOrderModal"

export function SubmitOrder() {
    return (
        <>
            <SuccessOrderModal />
            <ErrorOrderModal />
            <div className={styles.wrapper}>
                <OrderForm />
            </div>
        </>
    )
}
