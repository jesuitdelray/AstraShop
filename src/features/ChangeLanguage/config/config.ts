export enum Languages {
    ENGLISH = "en",
    RUSSIAN = "ru",
    FRENCH = "fr",
    SPANISH = "es",
}

interface LanguagesArrayItem {
    id: number
    text: string
    languagesCode: Languages
}

export const languagesData: LanguagesArrayItem[] = [
    { id: 1, text: "Русский", languagesCode: Languages.RUSSIAN },
    { id: 2, text: "English", languagesCode: Languages.ENGLISH },
    { id: 3, text: "Français", languagesCode: Languages.FRENCH },
    { id: 4, text: "Español", languagesCode: Languages.SPANISH },
]
