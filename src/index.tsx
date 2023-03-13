import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./app/App"
import "app/styles/index.scss"
import { ErrorBoundary } from "./app/providers/ErrorBoundary"

render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
)
