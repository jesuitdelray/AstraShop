import { Layout, LayoutIsland } from "../Layout/Layout"
import { ProductDescription } from "./ProductDescription/ProductDescription"
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

            <LayoutIsland column="right">
                <ProductDescription />
            </LayoutIsland>
        </Layout>
    )
}
