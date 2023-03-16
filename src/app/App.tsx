import { Suspense, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"

function App() {
    const [checked, setChecked] = useState(false)
    const [checked1, setChecked1] = useState(false)
    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                Navigation
                {/* @ts-ignore */}
                <Checkbox
                    id="321"
                    label="test"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                />
                <Checkbox
                    id="123"
                    label="test123"
                    checked={checked1}
                    onChange={() => setChecked1(!checked1)}
                />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
