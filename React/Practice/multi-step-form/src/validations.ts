import type { ValidationType } from "./types"

export const validationRegistry = {
    required,
    minLength,
    pattern,
    matchField,
    min,
    maxLength
}

function required(val: string): boolean {
    return val===undefined|| val === ""
}

function minLength(val: string="", minLength: number): boolean {
    return val===undefined || val.length < minLength
}

function pattern(val: string, pattern: RegExp): boolean {
    return !pattern.test(val)
}

function matchField(val: string, refVal: string): boolean {
    return val !== refVal
}

function min(val: number, minVal: number): boolean {
    return val < minVal
}
function maxLength(val: string="", maxLength: number): boolean {
    return val.length > maxLength
}


export function validate(name: string, validations: ValidationType[], formData: Record<string, string>, setErrors: React.Dispatch<React.SetStateAction<object[]>>) {
    let flag=false

    for (const validation of validations) {
        if (validation.type === "required") {
            if (validationRegistry[validation.type](formData[name])) {
                setErrors(prev => ({
                    ...prev,
                    [name]: validation.message
                }))
                flag=true;
                break

            }
        }
        else if (validation.type === "maxLength" || validation.type === "minLength") {
            if (validationRegistry[validation.type](formData[name], validation.value)) {
                setErrors(prev => ({
                    ...prev,
                    [name]: validation.message
                }))
                flag=true;
                break
            }
        }
        else if (validation.type === "min") {
            if (validationRegistry[validation.type](Number(formData[name]), validation.value)) {
                setErrors(prev => ({
                    ...prev,
                    [name]: validation.message
                }))
                flag=true;
                break
            }
        }
        else if (validation.type === "pattern") {
            if (validationRegistry[validation.type](formData[name], validation.value)) {
                setErrors(prev => ({
                    ...prev,
                    [name]: validation.message
                }))
                flag=true;
                break
            }
        }
        else {
            if (validationRegistry[validation.type](formData[name], formData[validation.field])) {
                setErrors(prev => ({
                    ...prev,
                    [name]: validation.message
                }))
                flag=true;
                break
            }
        }
    }
    if(!flag){
        setErrors((prev)=>({
            ...prev,
            [name]:"",
        }))
    }

    return flag;

}