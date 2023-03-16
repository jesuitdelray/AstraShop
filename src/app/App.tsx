import { Suspense } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Label, LabelColor, LabelFontSize } from "shared/ui/Label/Label"

function App() {
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                {/*  Navigation
                <div className="content-page">
                    <AppRouter />
                </div> */}
                <Label
                    value="0"
                    fontSize={LabelFontSize.FONT_SMALL}
                    color={LabelColor.GRAY}
                />
            </Suspense>
        </div>
    )
}

export default App
