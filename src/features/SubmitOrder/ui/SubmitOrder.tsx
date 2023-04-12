import { OrderForm } from "./OrderForm/OrderForm"
import styles from "./SubmitOrder.module.scss"
import { SuccessOrderModal } from "./SuccessOrderModal/SuccessOrderModal"

export function SubmitOrder() {
    return (
        <>
            <SuccessOrderModal />
            <div className={styles.wrapper}>
                <OrderForm />
            </div>
        </>
    )
}
