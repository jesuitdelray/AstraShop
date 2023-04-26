import { RussianFlag, SpainFlag, EnglishFlag, FranceFlag } from "shared/assets/icons/others"

export enum Languages {
    ENGLISH = "en",
    RUSSIAN = "ru",
    FRENCH = "fr",
    SPANISH = "es",
}

interface LanguagesArrayItem {
    id: number
    text: string
    Icon: any
    languagesCode: Languages
}

export const languagesData: LanguagesArrayItem[] = [
    { id: 1, text: "Русский", languagesCode: Languages.RUSSIAN, Icon: RussianFlag },
    { id: 2, text: "English", languagesCode: Languages.ENGLISH, Icon: EnglishFlag },
    { id: 3, text: "Français", languagesCode: Languages.FRENCH, Icon: FranceFlag },
    { id: 4, text: "Español", languagesCode: Languages.SPANISH, Icon: SpainFlag },
]
