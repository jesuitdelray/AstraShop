import { useState } from "react"
import { basketActions } from "entities/Basket"
import { useDispatch } from "react-redux"
import { CrossRIcon, DeleteBucketIcon } from "shared/assets/icons/others"
import { ModalSlider, ModalSliderVariant } from "entities/ModalSlider"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./RemoveProductFromBasket.module.scss"

interface RemoveProductFromBasketProps {
    id: number
}

export function RemoveProductFromBasket({ id }: RemoveProductFromBasketProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    function clickHandler() {
        setIsOpen(true)
    }

    function confirmClickHandler() {
        dispatch(basketActions.removeFromBasket(id))
    }

    function closeModalHandler() {
        setIsOpen(false)
    }

    return (
        <>
            <ModalSlider
                isOpen={isOpen}
                onClose={closeModalHandler}
                variant={ModalSliderVariant.MODAL}
                className={styles.modal}
            >
                <div className={styles.modalContainer}>
                    <CrossRIcon className={styles.cross} onClick={closeModalHandler} />
                    <Typography variant={TypographyVariant.H3} className={styles.title}>
                        Are you sure?
                    </Typography>
                    <div className={styles.buttons}>
                        <Button onClick={confirmClickHandler} variant={ButtonVariant.FILLED_RED}>
                            Delete
                        </Button>
                        <button className={styles.btnCancel} onClick={closeModalHandler}>
                            Cancel
                        </button>
                    </div>
                </div>
            </ModalSlider>
            <DeleteBucketIcon onClick={clickHandler} className={styles.delete} />
        </>
    )
}
