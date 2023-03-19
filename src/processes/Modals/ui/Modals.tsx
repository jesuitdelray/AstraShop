import { Basket } from "widgets/Basket"
import { BurgerMenu } from "widgets/BurgerMenu"

interface ModalsProps {
    modalOpen: string
    setModalOpen: (value: string) => void
}

export function Modals({ modalOpen, setModalOpen }: ModalsProps) {
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
