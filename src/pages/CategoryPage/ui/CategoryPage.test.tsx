import { createStore } from "redux"

// eslint-disable-next-line default-param-last
const reducer = (state = { count: 0 }, action: any) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

const store = createStore(reducer)

const mockReducer = jest.fn((state, action) => reducer(state, action))

test("increment action", () => {
    const originalDispatch = store.dispatch
    store.dispatch = jest.fn(originalDispatch)

    store.dispatch({ type: "INCREMENT" })

    expect(mockReducer).toHaveBeenCalledWith({ count: 0 }, { type: "INCREMENT" })
})

test("decrement action", () => {
    const originalDispatch = store.dispatch
    store.dispatch = jest.fn(originalDispatch)

    store.dispatch({ type: "DECREMENT" })

    expect(mockReducer).toHaveBeenCalledWith({ count: 0 }, { type: "DECREMENT" })
})
