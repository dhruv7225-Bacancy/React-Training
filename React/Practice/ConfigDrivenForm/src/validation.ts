import type { InputFieldTypes, ValidationType } from "./types"

type validationRegistryType = {
    "required": (val: string | number | string[], validation: ValidationType) => string,
    "NotValidName": (val: string, validation: ValidationType) => string,
    "min": (val: number, validation: ValidationType) => string,
    "max": (val: number, validation: ValidationType) => string,
    "match": (val: string, validation: ValidationType, refVal: string) => string,
    "minLen": (val: string, validation: ValidationType) => string,
    "email": (val: string, validation: ValidationType) => string,
    "includeSpecialCharacters": (val: string, validation: ValidationType) => string,
    "phoneNumber": (val: string, validation: ValidationType) => string,
    "minTags": (val: string[], validation: ValidationType) => string

}

export const validationRegistry: validationRegistryType = {
    "required": required,
    "NotValidName": NotValidName,
    "min": min,
    "match": match,
    "max": max,
    // "numberLength": numberLength,
    "minLen": minLen,
    "email": email,
    "includeSpecialCharacters": includeSpecialCharacters,
    "phoneNumber": phoneNumber,
    "minTags":tag
}
function required(val: string | number | string[], validation: ValidationType): string {
    let errorMsg = ""
    if ((typeof val === "string" && val.trim().length === 0) || (typeof val === "number" && val === 0) || (Array.isArray(val) && val.length === 0)) {
        errorMsg = validation.message
    }

    return errorMsg
}
function NotValidName(val: string, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "NotValidName") {
        if (!validation.regex.test(val)) {
            errorMsg = validation.message
        }
    }

    return errorMsg
}
function min(val: number, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "min") {
        if (validation.value > val) {
            errorMsg = validation.message
        }
    }

    return errorMsg
}
function max(val: number, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "max") {
        if (validation.value < val) {
            errorMsg = validation.message
        }
    }

    return errorMsg
}
function phoneNumber(val: string, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "phoneNumber") {
        if (!validation.regex.test(val)) {
            errorMsg = validation.message
        }
    }

    return errorMsg
}
function minLen(val: string, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "minLen") {
        if (val.length < validation.value) {
            errorMsg = validation.message
        }
    }

    return errorMsg

}
function match(val: string, validation: ValidationType, refVal: string): string {
    let errorMsg = ""
    if (validation.type === "match") {
        if (refVal !== val) {
            errorMsg = validation.message
        }
    }

    return errorMsg

}
function email(val: string, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "email") {
        if (!validation.regex.test(val)) {
            errorMsg = validation.message
        }
    }

    return errorMsg
}
function includeSpecialCharacters(val: string, validation: ValidationType): string {
    let errorMsg = ""
    if (validation.type === "includeSpecialCharacters") {
        if (!validation.regex.test(val)) {
            errorMsg = validation.message
        }
    }

    return errorMsg
}
function tag(val: string[], validation: ValidationType){
    let err=""

    if(validation.type==="minTags"){
        if(val.length<validation.value){
            err=validation.message
        }
    }
    return err;
}


export function validate(value: string | number | string[], validation: ValidationType[],formData:Record<string, string | number | string[]>) {

    let error = ""
    for (const validationChild of validation ?? []) {
        // console.log("validatechild", validationChild)
        if (validationChild) {
            if (validationChild.type === "match" ) {
                if( typeof value==="string"){
                    error = validationRegistry[validationChild?.type](value, validationChild, String(formData[validationChild.ref]))
                }
            }
            else {
                error = validationRegistry[validationChild?.type](value, validationChild)
            }
        }

        if (error) break;
    }
    return error

}