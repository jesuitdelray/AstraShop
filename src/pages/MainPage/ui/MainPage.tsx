import { BannersRow } from "widgets/BannersRow"
import { TopBanner } from "widgets/TopBanner"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { BannerSlider, SingleBanner } from "widgets/Banner"

import { CatalogSidebarNav } from "entities/CatalogNavigation/ui/CatalogSidebar/CatalogSidebarNav/CatalogSidebarNav" // change

import { Layout, Row } from "./Layout"

export function MainPage() {
    return (
        <div>
            <Layout gap="20px">
                <Row
                    schema={{
                        0: [0, 1, 0],
                        1200: [0, 5, 1],
                        1600: [15, 65, 20],
                    }}
                    gap="10px"
                >
                    <div style={{ background: "white", width: "100%" }}>
                        <CatalogSidebarNav />
                    </div>
                    <BannerSlider />
                    <div style={{ background: "white", width: "100%" }}>Content 2</div>
                </Row>

                <Row
                    schema={{
                        0: [1, 1],
                        1200: [0, 0],
                    }}
                    gap="10px"
                >
                    <CatalogSidebarNav />
                    <div style={{ background: "white", width: "100%" }}>Content 2</div>
                </Row>

                <Row>
                    <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
                </Row>

                <Row>
                    <SingleBanner imgIndex={1} />
                </Row>

                <Row>
                    <ProductCarousel variant={ProductCarouselVariant.NEW_PRODUCTS} />
                </Row>

                <Row>
                    <BannersRow />
                </Row>
            </Layout>
        </div>
    )
}
