import { Suspense, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { Modals } from "processes/Modals"
import { Sidebar } from "widgets/Sidebar"

function App() {
    const [modalOpen, setModalOpen] = useState("filters")

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Modals modalOpen={modalOpen} setModalOpen={setModalOpen} />
                <Sidebar />
                <div className="content-page">
                    <Header modalOpen={modalOpen} setModalOpen={setModalOpen} />
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    )
}

export default App
