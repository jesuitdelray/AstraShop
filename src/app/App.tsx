import { Suspense, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Modal } from "shared/ui/Modal/Modal"

function App() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                Navigation
                <button onClick={() => setToggle(true)}>toggle</button>
                <Modal isOpen={toggle} onClose={() => setToggle(false)}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                </Modal>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
