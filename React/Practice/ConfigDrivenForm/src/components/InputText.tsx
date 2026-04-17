import React from 'react'
import type { ValidationType, InputFieldTypes } from '../types'
import { validate } from '../validation'


//text password 
type PropsType = {
    formData: Record<string, string | number | string[]>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>
    validation: ValidationType[],
    label: string,
    errors: Record<string, string>,
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
} & Pick<InputFieldTypes, "type" | "id" | "name" | "required">
const InputText = ({ formData, setFormData, validation, label, errors, setErrors, ...input }: PropsType) => {
    // console.log(input)
    // console.log(formData)

    

    
    function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
        let err:string=errors[input.name]??undefined
        setFormData((prev) => {
            return {
                ...prev,
                [input.name]: e.target.value
            }
        })
        if (errors[input.name]!==undefined) {
            
            err=validate(e.target.value ?? formData[input.name],validation,formData)
            
        }
        setErrors((prev) => {
            return {
                ...prev,
                [input.name]: err
            }
        })
    }
    function blurValue(e:React.FocusEvent<HTMLInputElement, Element>) {
        let err:string=""
        err=validate(e.target.value,validation,formData)
        setErrors((prev) => {
            return {
                ...prev,
                [input.name]: err
            }
        })
    }
    
    return (
        <div>
            <label htmlFor={input.id}>{input.required && <sup style={{ color: "red" }}>*</sup>}{label}</label>

            <input
                {...input}
                value={formData[input.name] ?? ""}
                onChange={changeValue}
                onBlur={blurValue}
                required={false}
            />
            {
                errors[input.name] && (<span style={{ color: "red" }}>{errors[input.name]}</span>)
            }
        </div>
    )
}

export default InputText
