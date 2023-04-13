import { useTranslation } from "react-i18next"
import { IFormData } from "../model/types/types"
import i18n from "shared/config/i18n/i18n"

export function inputValidate(formData) {
    //const { t } = useTranslation()

    function validateName(value: string): string {
        let error = ""
        if (!value) {
            error = i18n.t("requiredField")
        }

        const OnlyLetters = "^(?:|[^0-9]+)$"
        const regex = new RegExp(OnlyLetters)
        if (!regex.test(value)) {
            error = "Include only letters"
        }
        return error
    }

    function validatePhone(value: string): string {
        let error = ""
        if (!value) {
            error = "Required field"
        }

        const phoneOnly =
            "^((\\+\\d{1,3}|\\d{1,3}[\\s-]?)?(\\(\\d{2,5}\\)|\\d{2,5})[\\s-]?\\d{2,5}[\\s-]?\\d{2,5}[\\s-]?\\d{2,5})?$"

        const regex = new RegExp(phoneOnly)
        if (!regex.test(value)) {
            error = "Your phone number is incorrect"
        }

        return error
    }

    function validateEmail(value: string): string {
        let error = ""
        if (!value) {
            error = "Required field"
        }

        const onlyEngLetters = /[^\x00-\x7F]+/
        if (onlyEngLetters.test(value)) {
            error = "Only english, digits and special characters allowed"
        }

        const emailPattern =
            "^([_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,}))?$"
        const regex = new RegExp(emailPattern)

        if (!regex.test(value)) {
            error = "Please enter a valid email"
        }

        return error
    }

    function validateCity(value: string): string {
        let error = ""
        if (!value) {
            error = "Required field"
        }

        const OnlyLetters = "^(?:|[^0-9]+)$"
        const regex = new RegExp(OnlyLetters)
        if (!regex.test(value)) {
            error = "Include only letters"
        }
        return error
    }

    function validateDepartment(value: string): string {
        let error = ""
        if (!value) {
            error = "Required field"
        }
        return error
    }

    function validateConsent(value: boolean): string {
        let error = ""
        if (!value) {
            error = "Required field"
        }
        return error
    }

    const name = validateName(formData.name)
    const phone = validatePhone(formData.phone)
    const email = validateEmail(formData.email)
    const city = validateCity(formData.city)
    const department = validateDepartment(formData.department)
    const isConsent = validateConsent(formData.isConsent)

    return { name, phone, email, city, department, isConsent }
}
