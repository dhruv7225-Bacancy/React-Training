import React, { useState } from 'react'
import type { FormConfigType, Option } from './App'
import { validateComp } from './validate'
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
        // if (formfield.required && !val) {
        //     setErrors((prev) => ({
        //         ...prev,
        //         [formfield.name]: "This field is required",
        //     }));
        // } else {
        //     setErrors((prev) => ({
        //         ...prev,
        //         [formfield.name]: "",
        //     }));
        // }

        let errorMessage = "";
        formfield.validation?.forEach(validation => {
            if (errorMessage) return;
            errorMessage = validateComp(validation, val, formData)
            // switch (validation.type) {
            //     case "NotValidName":
            //         if (val.length === 0) {
            //             errorMessage = validation.message
            //         }

            //         break;
            //     case "min":
            //         if (typeof validation.value !== "undefined" && Number(val) < validation.value) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "max":
            //         if (typeof validation.value !== "undefined" && Number(val) > validation.value) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "email":
            //         if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "minLen":
            //         if (typeof validation.value !== "undefined" && val.length < validation.value) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "includeSpecialCharacters":
            //         if (!val.includes("@") && !val.includes("#") && !val.includes("$") && !val.includes("%")) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "match":
            //         if (formData["password"] !== val) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "number":
            //         if (val.length !== validation.value) {
            //             errorMessage = validation.message
            //         }
            //         break;
            //     case "minTags":
            //         {
            //             const tags = Array.isArray(val) ? val : formData[formfield.name]

            //             if (Array.isArray(tags) && tags.length < validation.value!) {
            //                 errorMessage = validation.message
            //             }
            //         }
            //         break;
            // }
        });
        setErrors((prev) => ({
            ...prev,
            [formfield.name]: errorMessage
        }));
    }

    function func(e){
        let val=e.target.value
        setFormData((prev)=>{
            return {
                ...prev,
                [formfield.dependsOn]:val
            }
        })
    }



    switch (formfield.type) {
        case ("text"):
        case ("email"):
        case "number":
        case "password":
            if(formfield.dependsOn){
                return (
                    <>
                    <label htmlFor="">{formfield.label}</label>
                    <input 
                        type={formfield.type}
                        value={formData[formfield.dependsOn]}
                        onChange={func}
                        // readOnly
                    />
                    </>
                )
            }

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
        case "checkbox":{
            const selected = (formData[formfield.name] as string[]) ?? [];

            const handleCheck = (value: string) => {
                let newValues;

                if (selected.includes(value)) {
                    newValues = selected.filter(v => v !== value);
                } else {
                    newValues = [...selected, value];
                }

                setFormData(prev => ({
                    ...prev,
                    [formfield.name]: newValues
                }));
            };
            return (
                <>
                    <label>{formfield.label}</label>

                    {formfield.options?.map((option: Option) => (
                        <label key={option.value} style={{ marginLeft: "10px" }}>
                            <input
                                type="checkbox"
                                name={formfield.name}
                                value={option.value}
                                checked={selected.includes(option.value)}
                                onChange={() => handleCheck(option.value)}
                            />
                            {option.label}
                        </label>
                    ))}

                </>
            )}
    }
}


export default FormField;
