import { CSSProperties, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RoutePath } from "shared/config/routeConfig/const"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { BoxIcon } from "shared/assets/icons/list"
import styles from "./CatalogSidebarNav.module.scss"
import { CatalogModal } from "./CatalogModal"
import { navigationSubcategory, navigationTreeType } from "../../../model/types/list"
import { fetchNavigationTree } from "../../../model/services/fetchNavigationTree/fetchNavigationTree"
import {
    getNavigationTree,
    getNavigationTreeError,
} from "../../../model/selectors/sidebarNavigationSelectors"
import { SubCatalogModal } from "./SubCatalogModal"

interface SubMenuProps {
    list: navigationSubcategory[]
    isOpen: boolean
    className?: string
    onLinkClick?: () => void
}

function SubMenu({ list, isOpen, onLinkClick, className }: SubMenuProps) {
    if (!isOpen) return null

    return (
        <div className={classNames(styles.subMenu, {}, [className])}>
            {list.map(item => {
                const { id, name } = item
                return (
                    <AppLink key={id} to={`${RoutePath.sub_category}/${id}`} onClick={onLinkClick}>
                        {name}
                    </AppLink>
                )
            })}
        </div>
    )
}

export function CatalogSidebarNav() {
    const [hovered, setHovered] = useState(-1)
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    function modalOpen() {
        setmodalIsOpen(true)
    }

    function modalClose() {
        setmodalIsOpen(false)
        setHovered(-1)
    }

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function mouseEnterHandler(id: number) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
        setTimeout(() => {
            setHovered(id)
        }, 200)
    }

    /* function mouseLeaveHandler() {
         timeoutRef.current = setTimeout(() => {
         }, 200)
    } */

    const dispatch = useDispatch()
    const navigationTree: navigationTreeType = useSelector(getNavigationTree)
    const error = useSelector(getNavigationTreeError)

    useEffect(() => {
        if (!navigationTree.length && !error) {
            dispatch(fetchNavigationTree())
        }
    }, [dispatch, navigationTree, error])

    const containerRef = useRef<HTMLDivElement>(null)
    const containerWidth = containerRef.current?.clientWidth
    const containerHeight = containerRef.current?.clientHeight
    const containerCoordinate = containerRef.current?.getBoundingClientRect()

    return (
        <div className={styles.wrapper} ref={containerRef}>
            <div className={styles.container} onMouseEnter={modalOpen}>
                {navigationTree.map(item => {
                    const { id, icon } = item
                    return (
                        <div key={id} className={styles.linkContainer}>
                            <AppLink
                                to={`${RoutePath.category}/${id}`}
                                onClick={() => setHovered(-1)}
                                className={styles.link}
                            >
                                {icon ? <img src={icon} alt="svg" /> : <BoxIcon />}
                                {item.name}
                            </AppLink>
                        </div>
                    )
                })}
            </div>
            {/* {modalIsOpen && ( */}

            <CatalogModal
                isOpen={modalIsOpen}
                onClose={modalClose}
                styles={{
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`,
                    top: `${Number(containerCoordinate?.top)}px`,
                    left: `${Number(containerCoordinate?.left)}px`,
                }}
                className={styles.modal}
            >
                <div className={styles.modalContainer}>
                    {navigationTree.map(item => {
                        const { id, icon } = item
                        return (
                            <div
                                key={id}
                                onMouseEnter={() => mouseEnterHandler(id)}
                                className={styles.modalLinkContainer}
                            >
                                <AppLink
                                    to={`${RoutePath.category}/${id}`}
                                    onClick={() => setHovered(-1)}
                                    className={styles.modalLink}
                                >
                                    {icon ? <img src={icon} alt="svg" /> : <BoxIcon />}
                                    {item.name}
                                </AppLink>
                            </div>
                        )
                    })}
                </div>
            </CatalogModal>
            {navigationTree.map(item => {
                const { id, categories: subCategories } = item
                return (
                    <SubCatalogModal
                        styles={{
                            height: `${containerHeight}px`,
                            top: `${Number(containerCoordinate?.top)}px`,
                            left: `${Number(containerCoordinate?.right)}px`,
                        }}
                        isOpen={hovered === id && !!subCategories && subCategories?.length > 0}
                        onClose={modalClose}
                        className={styles.subMenuModal}
                    >
                        <div className={styles.subMenuModalContainer}>
                            <SubMenu
                                list={subCategories}
                                isOpen={
                                    hovered === id && !!subCategories && subCategories?.length > 0
                                }
                                onLinkClick={() => setHovered(-1)}
                            />
                        </div>
                    </SubCatalogModal>
                )
            })}

            {/* )} */}
        </div>
    )
}
