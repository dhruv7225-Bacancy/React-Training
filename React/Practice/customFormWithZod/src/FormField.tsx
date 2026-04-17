import React, { useState } from 'react'
import type { FormConfigType, Option } from './App'
import { formSchema } from './formSchema'
import type { ZodError } from 'zod'
type props = {
    formfield: FormConfigType,
    formData: Record<string, string | number | string[]>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>,
    errors: Record<string, string>,
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    changeType: string
}

const FormField = ({ formfield, formData, setFormData, errors, setErrors, changeType }: props) => {
    function changeValue(val: string) {
        setFormData((prev) => ({
            ...prev,
            [formfield.name]: val,
        }));
        if (changeType === "onChange") {
            validateOnChange(val);
        }
    }
    function validateOnBlur(val: string | string[]) {
        if (changeType === "onBlur") {
            validateOnChange(val)
        }
    }

    function validateOnChange(val: string | string[]) {
        const updatedData = {
            ...formData,
            [formfield.name]: val
        }
        // const results = formSchema.safeParse(updatedData)
        let result=null
        if (formfield.name === "confirmPassword") {
            result = formSchema.safeParse(updatedData)
        }
        else {
            const fieldSchema = formSchema.shape[formfield.name as keyof typeof formSchema.shape]
            result = fieldSchema.safeParse(val)
        }
        console.log(result.error);
        

        setErrors(prev => ({
            ...prev,
            [formfield.name]: result.success ? "" : result.error.issues[0].message
        }))
        if(result.success){
            setErrors({})
        }
        // const newErrors = {}
        // if (result.error) {
        //     (result.error as ZodError).issues.forEach(err => {
        //         const field = err.path[0] as string;
        //         if (!newErrors[field]) {
        //             newErrors[field] = err.message;
        //         }
        //     })
        // }
        // setErrors(newErrors)
    }



    switch (formfield.type) {
        case ("text"):
        case ("email"):
        case "number":
        case "password":
        // case "confirmPassword":
            if (formfield.condition) {
                const { field, value } = formfield.condition

                if (formData[field] !== value) {
                    return null
                }
            }
            return (
                <>
                    <label htmlFor={formfield.id}>{formfield.label}</label>
                    <input
                        type={formfield.type}
                        name={formfield.name}
                        id={formfield.id}
                        value={formData[formfield.name] ?? ""}
                        onChange={(e) => changeValue(e.target.value)}
                        placeholder={formfield.placeholder ?? ""}
                        required={formfield.required ?? false}
                        onBlur={(e) => validateOnBlur(e.target.value)}
                    />
                    {
                        errors[formfield.name] && (
                            <span style={{ color: "red" }}> {errors[formfield.name]}</span>
                        )
                    }
                </>
            )
        // case ("email"):
        //     return (
        //         <>
        //             <label htmlFor={formfield.id}>{formfield.label}</label>
        //             <input
        //                 type="email"
        //                 name={formfield.name}
        //                 id={formfield.id}
        //                 value={formData[formfield.name] ?? ""}
        //                 onChange={(e) => changeValue(e.target.value)}
        //                 placeholder={formfield.placeholder ?? ""}
        //                 required={formfield.required ?? false}
        //                 onBlur={(e) => validateOnBlur(e.target.value)}
        //             />
        //             {
        //                 errors[formfield.name] && (
        //                     <span style={{ color: "red" }}> {errors[formfield.name]}</span>
        //                 )
        //             }
        //         </>
        //     )

        // case "number":
        //     if (formfield.condition) {
        //         const { field, value } = formfield.condition

        //         if (formData[field] !== value) {
        //             return null
        //         }
        //     }
        //     return (
        //         <>
        //             <label htmlFor={formfield.id}>{formfield.label}</label>
        //             <input
        //                 type="number"
        //                 name={formfield.name}
        //                 id={formfield.id}
        //                 value={formData[formfield.name] ?? ""}
        //                 onChange={(e) => changeValue(e.target.value)}
        //                 placeholder={formfield.placeholder ?? ""}
        //                 onBlur={(e) => validateOnBlur(e.target.value)}
        //             />

        //             {errors[formfield.name] && (
        //                 <span style={{ color: "red" }}>
        //                     {errors[formfield.name]}
        //                 </span>
        //             )}
        //         </>
        //     )

        // case "password":
        //     return (
        //         <>
        //             <label htmlFor={formfield.id}>{formfield.label}</label>
        //             <input
        //                 type="password"
        //                 name={formfield.name}
        //                 id={formfield.id}
        //                 value={formData[formfield.name] ?? ""}
        //                 onChange={(e) => changeValue(e.target.value)}
        //                 placeholder={formfield.placeholder ?? ""}
        //                 onBlur={(e) => validateOnBlur(e.target.value)}
        //             />

        //             {errors[formfield.name] && (
        //                 <span style={{ color: "red" }}>
        //                     {errors[formfield.name]}
        //                 </span>
        //             )}
        //         </>
        //     )
        case "confirmPassword":
            return (
                <>
                    <label htmlFor={formfield.id}>{formfield.label}</label>
                    <input
                        type="password"
                        name={formfield.name}
                        id={formfield.id}
                        value={formData[formfield.name] ?? ""}
                        onChange={(e) => changeValue(e.target.value)}
                        placeholder={formfield.placeholder ?? ""}
                        onBlur={(e) => validateOnBlur(e.target.value)}
                    />

                    {errors[formfield.name] && (
                        <span style={{ color: "red" }}>
                            {errors[formfield.name]}
                        </span>
                    )}
                </>
            )
        case "radio":
            return (
                <>
                    <label>{formfield.label}</label>

                    {formfield.options?.map((option: Option) => (
                        <label key={option.value} style={{ marginLeft: "10px" }}>
                            <input
                                type="radio"
                                name={formfield.name}
                                value={option.value}
                                checked={formData[formfield.name] === option.value}
                                onChange={(e) => changeValue(e.target.value)}
                                onBlur={(e) => validateOnBlur(e.target.value)}
                            />
                            {option.label}
                        </label>
                    ))}

                    {/* {errors[formfield.name] && (
                        <span style={{ color: "red", display: "block" }}>
                            {errors[formfield.name]}
                        </span>
                    )} */}
                </>
            )
        case "select":
            return (
                <>
                    <label htmlFor={formfield.id}>{formfield.label}</label>

                    <select
                        name={formfield.name}
                        id={formfield.id}
                        value={formData[formfield.name] ?? formfield.options![0].value}
                        onChange={(e) => changeValue(e.target.value)}
                        onBlur={(e) => validateOnBlur(e.target.value)}
                    >
                        {formfield.options && formfield.options.map((option: Option) => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                    </select>
                </>
            )
        case "tag":
            {
                const hobbies: string[] = formData[formfield.name] as string[] ?? []
                const [inputValue, setInputValue] = useState<string>("");
                function addTag(e: React.KeyboardEvent<HTMLInputElement>) {
                    if (e.key === "Enter") {
                        e.preventDefault()
                        const newTags = [...hobbies, inputValue]
                        setFormData((prev) => {
                            return { ...prev, [formfield.name]: newTags }
                        })
                        setInputValue("")
                        if (changeType === "onChange") {
                            validateOnChange(newTags)
                        }
                    }
                }
                function removeTag(index: number) {
                    const newTags = hobbies.filter((hobby, i) => i !== index)

                    setFormData((prev) => {
                        return {
                            ...prev,
                            [formfield.name]: newTags
                        }
                    })
                    if (changeType === "onChange") {
                        validateOnChange(newTags)
                    }
                }
                return (
                    <>
                        <label htmlFor={formfield.id}>{formfield.label}</label>
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
                                onBlur={() => validateOnBlur(formData[formfield.name] as string[] ?? [])}
                            />
                        </div>
                        {errors[formfield.name] && (
                            <span style={{ color: "red" }}>
                                {errors[formfield.name]}
                            </span>
                        )}

                    </>
                )
            }
    }
}


export default FormField;
