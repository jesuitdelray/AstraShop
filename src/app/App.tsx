import { Suspense, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppRouter } from "app/providers/router"

import { Input, InputType } from "shared/ui/Input/Input"

function App() {
    const [inputs, setInputs] = useState("")

    return (
        <div className={classNames("app", {}, [])}>
            <Suspense fallback="">
                Navigation
                <Input
                    type={InputType.PASSWORD}
                    placeholder="Enter your name"
                    label="Имя, Фамилия"
                    value={inputs}
                    onChange={(value: string) => setInputs(value)}
                    error="Please Enter Correct Name!!!"
                    id="123"
                />
                <Input
                    type={InputType.PASSWORD}
                    placeholder="Enter your name"
                    label="Имя, Фамилия"
                    value={inputs}
                    onChange={(value: string) => setInputs(value)}
                    error="Please Enter Correct Name!!!"
                    id="124"
                />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
