import { MutableRefObject, useRef, useState } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import {
    sidebarNavigationItemsType,
    sidebarNavigationList,
    sidebarNavigationSubMenuType,
} from "../model/list"
import styles from "./SidebarNavigation.module.scss"

interface SubMenuProps {
    list: sidebarNavigationSubMenuType[]
    isOpen: boolean
    onLinkClick?: () => void
}

function SubMenu({ list, isOpen, onLinkClick }: SubMenuProps) {
    if (!isOpen) return null

    return (
        <div className={styles.subMenu}>
            {list.map(item => {
                const { id, path, text } = item
                return (
                    <AppLink key={id} to={path} onClick={onLinkClick}>
                        {text}
                    </AppLink>
                )
            })}
        </div>
    )
}

export function SidebarNavigation() {
    const [hovered, setHovered] = useState("")

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function mouseEnterHandler(id: string) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }

        setHovered(id)
    }

    function mouseLeaveHandler() {
        timeoutRef.current = setTimeout(() => {
            setHovered("")
        }, 200)
    }

    return (
        <>
            <div className={classNames(styles.overlay, { [styles.overlayOn]: !!hovered })} />
            <div className={styles.container}>
                {sidebarNavigationList.map((item: sidebarNavigationItemsType) => {
                    const { id, path, text, Icon, subMenu = [] } = item
                    return (
                        <AppLink
                            key={id}
                            to={path}
                            className={styles.link}
                            onClick={() => setHovered("")}
                            onMouseEnter={() => mouseEnterHandler(id)}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            <Icon className={styles.icon} />
                            {text}
                            <SubMenu
                                list={subMenu}
                                isOpen={hovered === id && !!subMenu && subMenu?.length > 0}
                                onLinkClick={() => setHovered("")}
                            />
                        </AppLink>
                    )
                })}
            </div>
        </>
    )
}
