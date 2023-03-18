import { Basket } from "widgets/Basket"
import { BurgerMenu } from "widgets/BurgerMenu"

export function Modals({ modalOpen, setModalOpen }: any) {
    function closeModalHandler() {
        setModalOpen("")
    }

    return (
        <>
            <BurgerMenu isOpen={modalOpen === "burger"} onClose={closeModalHandler} />
            <Basket isOpen={modalOpen === "basket"} onClose={closeModalHandler} />
        </>
    )
}
