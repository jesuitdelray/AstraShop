import { Layout, LayoutIsland } from "../Layout/Layout"
import { ProductGallery } from "./ProductGallery/ProductGallery"

export function ProductAll() {
    return (
        <Layout>
            <LayoutIsland column="left">
                <ProductGallery />
            </LayoutIsland>

            <LayoutIsland column="right" height="100px">
                Price
            </LayoutIsland>

            <LayoutIsland column="left" height="50px">
                Info
            </LayoutIsland>

            <LayoutIsland column="right" height="200px">
                Filters
            </LayoutIsland>

            <LayoutIsland column="left" height="200px">
                Extra
            </LayoutIsland>
        </Layout>
    )
}
