import React from 'react'
import type { InputFieldType } from '../../types'

const InputTypeRadio = ({ field }: { field: InputFieldType }) => {
    if(field.type!=="radio"){
        return null
    }
    const { name, label, options, placeholder, validations } = field 
    return (
        <>
            <label htmlFor={name}>{label}</label>
            {
                options.map((option) => (
                    <div key={option.value}>
                    <label htmlFor={name}>{option.label}</label>
                    <input
                        type="radio"
                        name={name}
                        id={name}
                        value={option.value}
                        placeholder={placeholder}

                    />
                    </div>
                ))
            }
        </>
    )
}

export default InputTypeRadio
