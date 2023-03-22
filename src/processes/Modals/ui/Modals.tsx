import { Basket } from "widgets/Basket"
import { BurgerMenu } from "widgets/BurgerMenu"
import { FiltersModalSlider } from "widgets/FiltersModalSlider"

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
            <FiltersModalSlider isOpen={modalOpen === "filters"} onClose={closeModalHandler} />
        </>
    )
}
