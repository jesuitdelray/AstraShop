import { render } from "@testing-library/react"
import { BannersRow } from "./BannersRow"
import { Banner } from "./OldBanner/Banner"

jest.mock("../../const/lists", () => ({
    bannersRowList: [
        { id: 1, title: "Banner 1", desc: "Description 1", img: "banner1.jpg", link: "#" },
        { id: 2, title: "Banner 2", desc: "Description 2", img: "banner2.jpg", link: "#" },
    ],
}))

jest.mock("./OldBanner/Banner", () => ({
    Banner: jest.fn().mockReturnValue(null),
}))

describe("BannersRow", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("renders banners correctly", () => {
        render(<BannersRow />)
        expect(Banner).toHaveBeenCalledTimes(2)
    })
})
