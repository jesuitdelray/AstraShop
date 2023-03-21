import {
    BabyCarriageIcon,
    BoxIcon,
    CarIcon,
    FemaleIcon,
    HouseIcon,
    LampIcon,
    LaptopIcon,
    MaleIcon,
    ShopBagIcon,
    SoundIcon,
    TabletIcon,
} from "shared/assets/icons/list"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface sidebarNavigationItemsType {
    path: string
    text: string
    id: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarNavigationList: sidebarNavigationItemsType[] = [
    { id: "1", text: "Дом", Icon: HouseIcon, path: RoutePath.catalog },
    { id: "1", text: "Автомобиль", Icon: CarIcon, path: RoutePath.catalog },
    { id: "1", text: "Телефоны и планшеты", Icon: TabletIcon, path: RoutePath.catalog },
    { id: "1", text: "Компьютерная периферия", Icon: LaptopIcon, path: RoutePath.catalog },
    { id: "1", text: "Звуковое оборудование", Icon: SoundIcon, path: RoutePath.catalog },
    { id: "1", text: "Световое оборудование", Icon: LampIcon, path: RoutePath.catalog },
    { id: "1", text: "Мужчинам", Icon: MaleIcon, path: RoutePath.catalog },
    { id: "1", text: "Женщинам", Icon: FemaleIcon, path: RoutePath.catalog },
    { id: "1", text: "Детям", Icon: BabyCarriageIcon, path: RoutePath.catalog },
    { id: "1", text: "Торговля", Icon: ShopBagIcon, path: RoutePath.catalog },
    { id: "1", text: "Чехлы и пленки", Icon: TabletIcon, path: RoutePath.catalog },
    { id: "1", text: "Разное", Icon: BoxIcon, path: RoutePath.catalog },
]
