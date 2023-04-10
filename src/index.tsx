import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { StoreProvider } from "app/providers/StoreProvider"
import App from "./app/App"
import "app/styles/index.scss"
import { ErrorBoundary } from "./app/providers/ErrorBoundary"

const container = document.getElementById("root")

if (!container) {
    throw new Error("Container root not found. Unable to mount react app")
}
const root = createRoot(container)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
