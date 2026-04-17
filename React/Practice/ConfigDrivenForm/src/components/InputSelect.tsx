import React from 'react'
import type {  PropsTypeSelect } from '../types'

// type PropsType = {
//     formData: Record<string, string | number | string[]>,
//     setFormData: React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>
//     validation: ValidationType,
//     options: Option[],
//     label: string,
//     errors: Record<string, string>,
//     setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
// } & Pick<InputFieldTypes, "type" | "id" | "name">

const InputSelect = ({ formData, setFormData, validation, options, label, errors, setErrors, ...input }: PropsTypeSelect) => {
    // console.log(input)
    function changeValue(e: React.ChangeEvent<HTMLSelectElement>) {
        setFormData((prev) => {
            return {
                ...prev,
                [input.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <label htmlFor={input.id}>{label}:</label>
            <select
                {...input}
                onChange={changeValue}
                required={false}
            >
                {
                    options.map((option) => {
                        return (
                            <option
                                key={option.value}
                                value={option.value}
                                
                            >
                                {option.value.toUpperCase()}
                            </option>
                        )
                    })
                }

            </select>
            {
                errors[input.name] && (<span style={{ color: "red" }}>{errors[input.name]}</span>)
            }
        </div>
    )
}

export default InputSelect
