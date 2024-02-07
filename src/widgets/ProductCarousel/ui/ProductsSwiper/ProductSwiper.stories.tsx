import { Story, Meta } from "@storybook/react"
import { ProductsSwiper, IProductSwiperVariant, IProductSwiperProps } from "./ProductsSwiper"

export default {
    title: "Widgets/ProductsSwiper",
    component: ProductsSwiper,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: [IProductSwiperVariant.FULL, IProductSwiperVariant.WITH_BANNER],
            },
        },
    },
} as Meta

const Template: Story<IProductSwiperProps> = args => <ProductsSwiper {...args} />

export const LoadingState = Template.bind({})
LoadingState.args = {
    isLoading: true,
    variant: IProductSwiperVariant.FULL,
    slidesPerView: 3,
    isWithPagination: true,
}

export const WithChildren = Template.bind({})
WithChildren.args = {
    isLoading: false,
    variant: IProductSwiperVariant.WITH_BANNER,
    slidesPerView: 4,
    isWithPagination: true,
    children: Array.from({ length: 5 }, (_, index) => (
        <div key={index} style={{ background: "#eee", padding: "20px", textAlign: "center" }}>
            Slide {index + 1}
        </div>
    )),
}
