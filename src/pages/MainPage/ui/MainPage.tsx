import { BannersRow } from "widgets/BannersRow"
import {
    BannerWithProductsRow,
    ProductsRow,
    ProducstRowVariant,
    ProductsSale,
} from "widgets/ProductCarousel"
import { BannerSlider, SingleBanner } from "widgets/Banner"
import { ScrollToTop } from "shared/components/ScrollToTop"

import { CatalogSidebarNav } from "entities/CatalogNavigation/ui/CatalogSidebar/CatalogSidebarNav/CatalogSidebarNav" // change

import { Layout, Row } from "./Layout"

export function MainPage() {
    return (
        <div>
            <Layout gap="20px">
                <Row
                    schema={{
                        0: [0, 1, 0],
                        960: [2, 5, 0],
                        1200: [2, 5, 2],
                        1600: [1, 3, 1],
                    }}
                    gap="10px"
                    height="480px"
                >
                    <div style={{ background: "white", width: "100%", height: "100%" }}>
                        <CatalogSidebarNav />
                    </div>
                    <BannerSlider />
                    <ProductsSale />
                </Row>

                <Row
                    schema={{
                        0: [1],
                        1200: [0],
                    }}
                    gap="10px"
                >
                    <ProductsSale />
                </Row>

                <Row>
                    <BannerWithProductsRow id={1} />
                </Row>

                <Row>
                    <SingleBanner imgIndex={1} />
                </Row>

                <Row>
                    <ProductsRow variant={ProducstRowVariant.TOP_PRODUCTS} />
                </Row>

                <Row>
                    <BannersRow />
                </Row>
            </Layout>
            <ScrollToTop offsetY={300} />
        </div>
    )
}
