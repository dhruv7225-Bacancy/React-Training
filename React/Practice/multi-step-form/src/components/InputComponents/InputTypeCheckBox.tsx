import React from 'react'
import type { InputFieldType } from '../../types'

const InputTypeCheckBox = ({ field }: { field: InputFieldType }) => {
    
    const { name, label,defaultValue, validations } = field 
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input 
                type="checkbox" 
                name={name} 
                defaultChecked={ defaultValue==="true"? true:false}
             />
        </>
    )
}

export default InputTypeCheckBox
