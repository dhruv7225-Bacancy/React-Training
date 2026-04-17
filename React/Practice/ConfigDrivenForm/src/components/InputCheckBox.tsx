import React from 'react'
import type { ValidationType, Option, FormFieldInputSelect, InputFieldTypes, PropsTypeSelect } from '../types'
import { validate, validationRegistry } from '../validation'


const InputCheckBox = ({ formData, setFormData, validation, options, label, errors, setErrors, ...input }: PropsTypeSelect) => {
    // console.log(input)
    function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
        const exist = skills.includes(e.target.value)
        let err = ""
        let newArr:string[]=[]
        if (exist) {
            newArr=skills.filter(skill => skill !== e.target.value)
        }
        else {
            newArr=[...skills,e.target.value]
        }
        setFormData((prev) => {
            return {
                ...prev,
                [input.name]: newArr
            }
        })
        // console.log(newArr)
        err = validate(newArr,validation,formData)
        setErrors((prev) => {
            return {
                ...prev,
                [input.name]: err
            }
        })
    }

    const skills: string[] = formData[input.name] as string[] ?? []
    return (
        <div>
            <label htmlFor={input.id}>{input.required && <sup style={{ color: "red" }}>*</sup>}{label}</label>
            {
                options.map((option) => {
                    return (
                        <div key={option.value}>
                            <label htmlFor={option.name}>{option.name}</label>
                            <input
                                {...input}
                                id={option.name}
                                value={option.value}
                                checked={skills.includes(option.value)}
                                onChange={changeValue}
                                required={false}

                            />
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

export default InputCheckBox

