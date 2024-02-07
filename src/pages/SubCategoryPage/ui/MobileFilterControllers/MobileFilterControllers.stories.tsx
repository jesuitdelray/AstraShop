import { modalsReducer } from "entities/ModalSlider"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { MobileFilterControllers } from "./MobileFilterControllers"

const rootReducer = combineReducers({
    modals: modalsReducer,
})
const mockStore = createStore(rootReducer)

export default {
    title: "Pages/SubCategoryPage/MobileFilterControllers",
    component: MobileFilterControllers,
    decorators: [
        (Story: typeof MobileFilterControllers) => (
            <Provider store={mockStore}>
                <Story />
            </Provider>
        ),
    ],
}

export const Default = () => <MobileFilterControllers />
