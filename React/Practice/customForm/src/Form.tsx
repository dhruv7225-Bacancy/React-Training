import React, { useEffect, useState } from 'react'
import type { FormConfigType } from './App'
import FormField from './FormField'
import { validateComp } from './validate';

export function validate(formConfig:FormConfigType[],formData:Record<string, string | number>,setErrors:React.Dispatch<React.SetStateAction<Record<string, string>>>) {
        const newErrors: Record<string, string> = {};
        

        formConfig.forEach((field) => {
            const val = formData[field.name] ?? "";
            let errorMessage = "";

            field.validation?.forEach((validation) => {
                if (errorMessage) return;

                errorMessage=validateComp(validation,val,formData)
            });

            if (errorMessage) {
                newErrors[field.name] = errorMessage;
            }
        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }
const Form = ({ formConfig, changeType }: { formConfig: FormConfigType[], changeType: string }) => {
    
    const [formData, setFormData] = useState<Record<string, string | number>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (changeType === "onSubmit") {
            const valid = validate(formConfig,formData,setErrors)
            if (!valid) return
        }
        console.log(formData);
    }
    function clear(e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault()
        setFormData({})
        setErrors({})
    }
    useEffect(()=>{
        setErrors({})
    },[changeType])
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "20px", marginTop: "30px" }}>
                {formConfig
                    .filter((formField: FormConfigType) => {
                        if (!formField.condition) {
                            return true
                        }
                        const { field, value } = formField.condition;

                        if (!formData[field]) return false; 
                        return formData[field] === value;
                    })
                    .map((formField: FormConfigType) => {


                        return (
                            <div key={formField.id}>
                                <FormField formfield={formField} formData={formData} setFormData={setFormData} errors={errors} setErrors={setErrors} changeType={changeType} />
                            </div>
                        )

                    }
                    )}
                <button onClick={(e) => clear(e)}>Clear</button>
                <input type="submit" />
            </form>

        </>
    )
}

export default Form
