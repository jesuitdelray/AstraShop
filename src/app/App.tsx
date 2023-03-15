import { Suspense, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"

function App() {
    const [checked, setChecked] = useState(false)
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                Navigation
                {/* @ts-ignore */}
                <Checkbox
                    label="test"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
