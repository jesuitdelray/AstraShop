import { Suspense, useEffect } from "react"
import { useDispatch } from "react-redux"
import { classNames } from "shared/lib/classNames/classNames"
import { Header } from "widgets/Header"
import { Footer } from "widgets/Footer"
import { basketActions } from "entities/Basket"
import { Sidebar } from "widgets/Sidebar"
import { BasketModalSlider } from "widgets/BasketModalSlider"
import { BurgerMenu } from "widgets/BurgerMenu"
import { AppRouter } from "./providers/router"

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(basketActions.initBasketData())
    })

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <Sidebar />
                <div className="content-page">
                    <Header BasketModal={<BasketModalSlider />} BurgerModal={<BurgerMenu />} />
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    )
}

export default App
