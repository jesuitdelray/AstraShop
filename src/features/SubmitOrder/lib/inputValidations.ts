import { IFormData } from "../model/types"

function validateName(value: string): string {
    let error = ""
    if (!value) {
        error = "Required field"
    }
    return error
}

function validatePhone(value: string): string {
    let error = ""
    if (!value) {
        error = "Required field"
    }
    return error
}

function validateEmail(value: string): string {
    let error = ""
    if (!value) {
        error = "Required field"
    }
    return error
}

function validateCity(value: string): string {
    let error = ""
    if (!value) {
        error = "Required field"
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

export function inputValidations(formData: IFormData) {
    const name = validateName(formData.name)
    const phone = validatePhone(formData.phone)
    const email = validateEmail(formData.email)
    const city = validateCity(formData.city)
    const department = validateDepartment(formData.department)
    const isConsent = validateConsent(formData.isConsent)

    return { name, phone, email, city, department, isConsent }
}
