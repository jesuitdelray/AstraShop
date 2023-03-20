import { Suspense, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { Modals } from "processes/Modals"

function App() {
    const [modalOpen, setModalOpen] = useState("")

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Modals modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <div className="content-page">
                    <AppRouter />
                </div>
                <Footer />
            </Suspense>
        </div>
    )
}

export default App
