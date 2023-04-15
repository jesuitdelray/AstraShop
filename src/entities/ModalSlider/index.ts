import { modalsActions, modalsReducer } from "./model/slice/modalsSlice"
import { ModalSlider, ModalSliderDirection, ModalSliderVariant } from "./ui/ModalSlider"
import type { ModalsSchema } from "./model/types/modalsSchema"
import { ModalsList } from "./model/const/modalList"
import { getModalsCurrent } from "./model/selectors/getModalsCurrent/getModalsCurrent"

export {
    ModalSlider,
    ModalSliderDirection,
    ModalSliderVariant,
    modalsActions,
    modalsReducer,
    ModalsSchema,
    ModalsList,
    getModalsCurrent,
}
