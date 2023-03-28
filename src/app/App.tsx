import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { Modals } from "processes/Modals"
import { Sidebar } from "widgets/Sidebar"
import { AppRouter } from "./providers/router"

function App() {
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Modals />
                <Sidebar />
                <div className="content-page">
                    <Header />
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    )
}

export default App
