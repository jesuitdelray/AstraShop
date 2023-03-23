import img1 from "shared/assets/images/img3.png"
import img2 from "shared/assets/images/img7.png"

export interface productImagesListType {
    id: string
    img: string
}

export const productImagesList: productImagesListType[] = [
    { id: "1", img: img1 },
    { id: "2", img: img2 },
    { id: "3", img: img1 },
    { id: "4", img: img2 },
]

export interface productDescriptionDataType {
    id: string
    title: string
    text?: string
    list?: string[]
    isDescription?: boolean
}

export const productDescriptionData: productDescriptionDataType[] = [
    {
        id: "0",
        title: "Описание",
        list: [
            "Функция Clear Voice повышает четкость диалогов и дикторского текста",
            "Функция Music Enhancer служит для улучшения звука из источников сжатого сигнала ",
            "Функция Adaptive DRC позволяет регулировать громкость и динамический диапазон",
            `Экранное меню позволяет пользоваться командами меню поверх изображения на экране, и поддерживает несколько 
        языков (английский, немецкий, французский, итальянский, русский, голландский, шведский, турецкий и японский)`,
            "Выход на сабвуфер для расширения возможностей системы",
        ],
        isDescription: true,
    },
    { id: "1", title: "Каналы", text: "7. 1" },
    { id: "2", title: "Мощность", text: "128 Вт" },
    {
        id: "3",
        title: "Разьемы",
        list: [
            "HDMI",
            "Bluetooth",
            "Wi-Fi",
            "LAN (RJ-45)",
            "Цифровой коаксиальный вход",
            "AUX (3.5 мм)",
            "Выход на сабвуфер",
            "Аналоговый аудиовход (RCA)",
        ],
    },
    { id: "4", title: "Размеры", text: "(В.Ш.Г.) 212 мм, 1100 мм, 93 мм." },
    { id: "5", title: "Вес", text: "11.7 кг." },
]
