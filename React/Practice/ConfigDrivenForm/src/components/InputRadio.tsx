import React from 'react'
import type { FormFieldInputSelect, InputFieldTypes, Option, PropsTypeSelect, ValidationType } from '../types'
import { validate } from '../validation'

// type PropsType = {
//     formData: Record<string, string | number | string[]>,
//     setFormData: React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>
//     validation: ValidationType[],
//     options: Option[],
//     label: string,
//     errors: Record<string, string>,
//     setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
// } & Pick<InputFieldTypes, "type" | "id" | "name"|"required">

const InputRadio = ({ formData, setFormData, validation, options, label, errors, setErrors, ...input }: PropsTypeSelect) => {
    // console.log(input)
    function changeValue(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>) {
        let err=errors[input.name]
        err=validate(e.target.value,validation,formData)
        setErrors((prev)=>({
            ...prev,
            [input.name]:err
        }))
        setFormData((prev) => {
            return {
                ...prev,
                [input.name]: e.target.value
            }
        })
    }
    return (
        <div>
            <label htmlFor={input.id}>{input.required && <sup style={{color:"red"}}>*</sup>}{label}</label>
            {

                options.map(({ name, value }) => {
                    return (
                        <div key={value}>
                            <input
                                key={value}
                                {...input}
                                value={value}
                                onChange={changeValue}
                                required={false}
                            />
                            <label htmlFor={input.id}>{name}</label>

                        </div>
                    )
                })
            }
            {
                errors[input.name] && (<span style={{ color: "red" }}>{errors[input.name]}</span>)
            }
        </div>
    )
}

export default InputRadio
