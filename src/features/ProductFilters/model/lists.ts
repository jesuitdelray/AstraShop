export interface filterListsItemType {
    label: string
    id: string
    products: string
    isChecked?: boolean
}

interface filterListsDataType {
    id: string
    title: string
    list: filterListsItemType[]
}

export const filterListsData: filterListsDataType[] = [
    {
        id: "1",
        title: "Назначение",
        list: [
            { label: "Компьютер", id: "1.1", products: "20", isChecked: true },
            { label: "Планшет", id: "1.2", products: "50", isChecked: false },
        ],
    },
    {
        id: "2",
        title: "Тип",
        list: [
            { label: "Беспроводная", id: "2.1", products: "50", isChecked: false },
            { label: "Проводная", id: "2.2", products: "50", isChecked: false },
        ],
    },
    {
        id: "3",
        title: "Количество",
        list: [
            { label: "Розница", id: "3.1", products: "50", isChecked: true },
            { label: "50", id: "3.2", products: "100", isChecked: false },
            { label: "100", id: "3.3", products: "50", isChecked: false },
            { label: "200", id: "3.4", products: "50", isChecked: false },
            { label: "500", id: "3.5", products: "50", isChecked: true },
            { label: "1000", id: "3.6", products: "50", isChecked: false },
        ],
    },
]
