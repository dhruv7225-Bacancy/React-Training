import React, { useState } from 'react'
import type { ValidationType, InputFieldTypes } from '../types'
import { validate, validationRegistry } from '../validation'


//text password 
type PropsType = {
    formData: Record<string, string | number | string[]>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>
    validation: ValidationType[],
    label: string,
    errors: Record<string, string>,
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
} & Pick<InputFieldTypes, "type" | "id" | "name" | "required">


const InputTag = ({ formData, setFormData, validation, label, errors, setErrors, ...input }: PropsType) => {

    const hobbies: string[] = formData[input.name] as string[] ?? []
    const [inputValue, setInputValue] = useState<string>("");
    function addTag(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault()
            const newTags = [...hobbies, inputValue]
            setFormData((prev) => {
                return { ...prev, [input.name]: newTags }
            })
            setInputValue("")
            if (errors[input.name]!==undefined) {
                let err = validate(newTags, validation, formData)
                setErrors((prev) => ({
                    ...prev,
                    [input.name]: err
                }))
            }

        }
    }
    function removeTag(index: number) {
        const newTags = hobbies.filter((hobby, i) => i !== index)

        setFormData((prev) => {
            return {
                ...prev,
                [input.name]: newTags
            }
        })

        if (errors[input.name]!==undefined) {
                let err = validate(newTags, validation, formData)
                setErrors((prev) => ({
                    ...prev,
                    [input.name]: err
                }))
            }

    }

    function validateOnBlur() {
        let err = validate(hobbies, validation, formData)
        setErrors((prev) => ({
            ...prev,
            [input.name]: err
        }))
    }
    return (
        <>
            <label htmlFor={input.id}>{input.required && <sup style={{color:"red"}}>*</sup>}{label}</label>
            <div>
                {
                    hobbies.map((hobby, index) => {
                        return (
                            <div key={hobby.concat("#" + index)} style={{ display: "flex", gap: "2px", marginTop: "10px" }}>
                                <div style={{ border: "2px", padding: "7px", backgroundColor: "white", borderRadius: "10px", minWidth: "50px" }}>{hobby}</div>
                                <button onClick={() => removeTag(index)}>x</button>
                            </div>
                        )
                    })
                }
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => addTag(e)}
                    placeholder='press enter to add hobby'
                    style={{ padding: "5px" }}
                    onBlur={validateOnBlur}
                />
            </div>
            {errors[input.name] && (
                <span style={{ color: "red" }}>
                    {errors[input.name]}
                </span>
            )}

        </>
    )
}


export default InputTag
