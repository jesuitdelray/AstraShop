import { render, screen } from "@testing-library/react"
import { AsyncImage, ImageFit } from "./AsyncImage"

describe("AsyncImage test", () => {
    test("AsyncImage render", () => {
        render(<AsyncImage />)
        /* expect(screen.getByTestId("skeleton")).toBeInTheDocument()
        expect(screen.getByTestId("async-image")).toBeInTheDocument()
        expect(screen.queryByTestId("placeholder")).toBeInTheDocument() */
    })
})
