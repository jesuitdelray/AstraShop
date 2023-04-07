import { Copyright } from "entities/Copyright/Copyright"
import { Logo } from "entities/Logo/Logo"
import { Sidebar } from "shared/ui/Sidebar/Sidebar"
import { Navigation } from "./Navigation/Navigation"

export function CatalogSidebar() {
    return (
        <Sidebar>
            <Logo />
            <Navigation />
            <Copyright />
        </Sidebar>
    )
}
