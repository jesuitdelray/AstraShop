import { useState } from "react"
import { Story, Meta } from "@storybook/react"
import {
    ModalSlider,
    ModalSliderProps,
    ModalSliderVariant,
    ModalSliderDirection,
} from "./ModalSlider"
import { StoreProvider } from "app/providers/StoreProvider"

export default {
    title: "Entities/ModalSlider",
    component: ModalSlider,
    argTypes: {
        direction: {
            control: "radio",
            options: [ModalSliderDirection.TOP, ModalSliderDirection.RIGHT],
        },
        variant: {
            control: "radio",
            options: [ModalSliderVariant.SLIDER, ModalSliderVariant.MODAL],
        },
        containerHeight: {
            control: "text",
        },
    },
} as Meta

const Template: Story<ModalSliderProps> = args => {
    const [isOpen, setIsOpen] = useState(args.isOpen)
    return (
        <StoreProvider>
            <ModalSlider {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div style={{ padding: "20px" }}>Modal/Slider Content Here</div>
            </ModalSlider>
        </StoreProvider>
    )
}

export const SliderTop = Template.bind({})
SliderTop.args = {
    isOpen: true,
    variant: ModalSliderVariant.SLIDER,
    direction: ModalSliderDirection.TOP,
    containerHeight: "50%",
}

export const SliderRight = Template.bind({})
SliderRight.args = {
    isOpen: true,
    variant: ModalSliderVariant.SLIDER,
    direction: ModalSliderDirection.RIGHT,
    containerHeight: "100%",
}

export const ModalVariant = Template.bind({})
ModalVariant.args = {
    isOpen: true,
    variant: ModalSliderVariant.MODAL,
}
