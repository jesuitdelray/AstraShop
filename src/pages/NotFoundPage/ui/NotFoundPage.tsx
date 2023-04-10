import { useNavigate } from "react-router-dom"
import { RoutePath } from "shared/config/routeConfig/const"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./NotFoundPage.module.scss"

export function NotFoundPage() {
    const navigate = useNavigate()

    function clickHandler() {
        navigate(RoutePath.main)
    }

    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H2}>Страница не существует</Typography>
            <Button
                variant={ButtonVariant.FILLED_RED}
                className={styles.btn}
                onClick={clickHandler}
            >
                На главную
            </Button>
        </div>
    )
}
