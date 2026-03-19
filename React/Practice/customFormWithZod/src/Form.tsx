import React, { useEffect, useState } from 'react'
import type { FormConfigType } from './App'
import FormField from './FormField'
import { formSchema } from './formSchema'
import type { ZodError } from 'zod'

export function validate( formData: Record<string, string | number>, setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>) {


    // const results = formSchema.safeParse(updatedData)
    let result = null
    result = formSchema.safeParse(formData)



    const newErrors = {}
    if (result.error) {
        (result.error as ZodError).issues.forEach(err => {
            const field = err.path[0] as string;
            if (!newErrors[field]) {
                newErrors[field] = err.message;
            }
        })
        setErrors(newErrors)
        return false
    }
    else{
        setErrors({})
        return true
    }

}
const Form = ({ formConfig, changeType }: { formConfig: FormConfigType[], changeType: string }) => {

    const [formData, setFormData] = useState<Record<string, string | number>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (changeType === "onSubmit") {
            const valid = validate( formData, setErrors)
            if (!valid) return
        }
        console.log(formData);
    }
    function clear(e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault()
        setFormData({})
    }
    useEffect(() => {
        setErrors({})
    }, [changeType])
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
