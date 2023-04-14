import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    BasketSummary,
    BasketSummaryVariant,
    getBasketProductsTotalPrice,
    getBasketProductsTotalQuantity,
} from "entities/Basket"
import { Input } from "shared/ui/Input/Input"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { Checkbox } from "shared/ui/Checkbox/Checkbox"
import { classNames } from "shared/lib/classNames/classNames"
import { RadioGroup } from "shared/ui/RadioGroup"
import { modalsActions } from "entities/ModalSlider"
import { deliveryOptions as options } from "features/SubmitOrder/model/lists"
import { RoutePath } from "shared/config/routeConfig/const"
import { useTranslation } from "react-i18next"
import styles from "./OrderForm.module.scss"
import { inputValidations } from "../../lib/inputValidations"
import { IFormData } from "../../model/types/types"
import { createNewOrder } from "../../model/services/createNewOrder/createNewOrder"

export function OrderForm() {
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        phone: "",
        email: "",
        city: "",
        department: "",
        delivery: "option1",
        isConsent: true,
    })

    const { t } = useTranslation()
    const [formErrors, setFormErrors] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        department: "",
        isConsent: "",
    })

    const initialIsDirty = {
        name: false,
        phone: false,
        email: false,
        city: false,
        department: false,
        isConsent: false,
    }

    const [isDirty, setIsDirty] = useState(initialIsDirty)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function inputChangeHandler(value: string, input: string) {
        setFormData(prev => ({ ...prev, [input]: value }))
        setIsDirty(prev => ({ ...prev, [input]: true }))
    }

    function checkboxChangeHandler() {
        setFormData(prev => ({ ...prev, isConsent: !prev.isConsent }))
        setIsDirty(prev => ({ ...prev, isConsent: true }))
    }

    function radioChangeHandler(value: string) {
        setFormData(prev => ({ ...prev, delivery: value }))
    }

    function checkInputsValid(formData: IFormData) {
        const errors = inputValidations(formData)
        setFormErrors(errors)

        return !Object.values(errors).some(item => item.length > 0)
    }

    const totalPrice = useSelector(getBasketProductsTotalPrice)
    const totalQuantity = useSelector(getBasketProductsTotalQuantity)

    function checkOrderValid() {
        if (totalPrice > 0 && totalQuantity > 0) {
            return true
        }
        dispatch(modalsActions.openOrderError())
        return false
    }

    function submitHandler() {
        setIsDirty(initialIsDirty)
        if (!checkOrderValid()) return
        if (!checkInputsValid(formData)) return
        console.log("submit")
        // dispatch(createNewOrder(formData))
    }
    return (
        <div>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                {`${t("orderForm")}`}
            </Typography>
            <form action="submit" className={styles.form}>
                <Input
                    value={formData.name}
                    onChange={value => inputChangeHandler(value, "name")}
                    label={`${t("orderFormLabelName")}`}
                    placeholder={`${t("orderFormPlaceholderName")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.name])}
                    error={isDirty.name ? "" : formErrors.name}
                />
                <Input
                    value={formData.phone}
                    onChange={value => inputChangeHandler(value, "phone")}
                    label={`${t("orderFormPhoneNumber")}`}
                    placeholder={`${t("orderFormPlaceholderPhone")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.phone])}
                    error={isDirty.phone ? "" : formErrors.phone}
                />
                <Input
                    value={formData.email}
                    onChange={value => inputChangeHandler(value, "email")}
                    label="Email"
                    placeholder="example@mail.com"
                    isRequired
                    className={classNames(styles.input, {}, [styles.email])}
                    error={isDirty.email ? "" : formErrors.email}
                />
                <Input
                    value={formData.city}
                    onChange={value => inputChangeHandler(value, "city")}
                    label={`${t("orderFormLabelCity")}`}
                    placeholder={`${t("orderFormPlaceholderCity")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.city])}
                    error={isDirty.city ? "" : formErrors.city}
                />
                <RadioGroup
                    title={`${t("orderFormTypeOfDelivery")}`}
                    isRequired
                    options={options.map(option => ({ ...option, label: t(option.label) }))}
                    activeInput={formData.delivery}
                    onChange={radioChangeHandler}
                    className={styles.radios}
                />
                <Input
                    value={formData.department}
                    onChange={value => inputChangeHandler(value, "department")}
                    label={`${t("orderFormLabelPost")}`}
                    placeholder={`${t("orderFormPlaceholderPost")}`}
                    isRequired
                    className={classNames(styles.input, {}, [styles.department])}
                    error={isDirty.department ? "" : formErrors.department}
                />
                <Checkbox
                    id="checkbox1"
                    checked={formData.isConsent}
                    onChange={checkboxChangeHandler}
                    label={`${t("orderFormLabelAgreement")}`}
                    className={styles.consent}
                    error={isDirty.isConsent ? "" : formErrors.isConsent}
                />
                <BasketSummary
                    className={styles.orderInfo}
                    variant={BasketSummaryVariant.VERTICAL}
                    onOrderClick={submitHandler}
                    onExitClick={() => navigate(RoutePath.main)}
                />
            </form>
        </div>
    )
}
