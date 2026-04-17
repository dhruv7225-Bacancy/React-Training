import React from 'react'
import type { InputFieldType } from '../../types'
import { useForm } from '../../context/FormDataContext'
import { validate } from '../../validations'


const InputTypeText = ({ field }: { field: InputFieldType }) => {
    const { name, type, label, placeholder, validations, defaultValue } = field
    const { formData, setFormData, setErrors, errors } = useForm()

    function handleChange(e) {
        setFormData(prev => ({
            ...prev,
            [name]: e.target.value
        }))
        console.log(formData);
    }
    function handleBlur() {
        validate(name,validations,formData,setErrors)
    }
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                value={formData[name] || defaultValue}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {
                errors[name] && <p style={{color:"red"}}>{errors[name]}</p>
            }
        </div>
    )
}

export default InputTypeText
