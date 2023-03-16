import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import q from "shared/assets/svg/baby-carriage.svg"
import w from "shared/assets/svg/box.svg"
import e from "shared/assets/svg/car.svg"
import r from "shared/assets/svg/female.svg"
import t from "shared/assets/svg/house.svg"
import y from "shared/assets/svg/lamp.svg"
import u from "shared/assets/svg/laptop.svg"
import i from "shared/assets/svg/male.svg"
import o from "shared/assets/svg/shop-bag.svg"
import p from "shared/assets/svg/sound.svg"
import a from "shared/assets/svg/tablet.svg"
import s from "shared/assets/svg/tablet2.svg"
import z from "shared/assets/svg/others/facebook.svg"
import x from "shared/assets/svg/others/shopping-bag-red.svg"
import c from "shared/assets/svg/others/shopping-bag.svg"
import v from "shared/assets/svg/others/menu.svg"
import b from "shared/assets/svg/others/search.svg"

function App() {
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                <img src={o} alt="" />
                Navigation
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
