import { OrderForm } from "./OrderForm/OrderForm"
import styles from "./SubmitOrder.module.scss"

export function SubmitOrder() {
    return (
        <div className={styles.wrapper}>
            <OrderForm />
        </div>
    )
}
