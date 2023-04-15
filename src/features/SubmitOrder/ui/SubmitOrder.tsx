import { OrderForm } from "./OrderForm/OrderForm"
import styles from "./SubmitOrder.module.scss"
import { ErrorOrderModal } from "./ErrorOrderModal/ErrorOrderModal"

export function SubmitOrder() {
    return (
        <>
            <ErrorOrderModal />
            <div className={styles.wrapper}>
                <OrderForm />
            </div>
        </>
    )
}
