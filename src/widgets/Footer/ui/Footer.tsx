import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { information, schedule, contacts } from "../model/list"
import styles from "./NavigationList.module.scss"

interface FooterProps {
    className?: string
    onLinkClick?: () => void
}

export const NavigationList = memo((props: FooterProps) => {
    const { className, onLinkClick } = props
    const { information, schedule, contacts }
    return (
        <div className={classNames(styles.list, {}, [className])}>
            {list.map((item: any) => {
                const { path, text } = item
                return (
                    <AppLink
                        to={path}
                        className={styles.link}
                        onClick={onLinkClick}
                    >
                        {text}
                    </AppLink>
                )
            })}
        </div>
    )
})
