import { basketActions } from "entities/Basket"

describe("basketActions", () => {
    describe("incrementInBasket", () => {
        it("should create an action to increment product quantity in the basket", () => {
            const id = 1
            const expectedAction = {
                type: "basket/incrementInBasket",
                payload: id,
            }
            expect(basketActions.incrementInBasket(id)).toEqual(expectedAction)
        })
    })
})
