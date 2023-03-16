import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"

function App() {
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Header />
                <div className="content-page">
                    <AppRouter />
                </div>
                <Footer />
            </Suspense>
        </div>
    )
}

export default App
