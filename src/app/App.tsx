import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { Modals } from "processes/Modals"
import { basketActions } from "entities/Basket"
import { Sidebar } from "widgets/Sidebar"
import { AppRouter } from "./providers/router"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(basketActions.initBasketData())
    })

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
