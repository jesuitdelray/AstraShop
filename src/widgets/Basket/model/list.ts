import img from "./img3.png"

export interface basketItemsType {
    productName: string
    productPrice: string
    id: string
    img?: string
}

export const basketItemsList: basketItemsType[] = [
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "1" },
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "1" },
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "1" },
    { productName: "Yamaha YSP-5600 Black", productPrice: "1 931 грн", img, id: "1" },
]
