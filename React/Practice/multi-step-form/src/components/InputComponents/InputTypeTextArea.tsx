import React from 'react'
import type { InputFieldType } from '../../types'

const InputTypeTextArea = ({field}:{field:InputFieldType}) => {
    const {name,label,placeholder,validations}=field
  return (
    <>
    <label htmlFor="">{label}</label>
    <textarea 
        name={name} 
        id={name}
        placeholder={placeholder}
    />
    </>
  )
}

export default InputTypeTextArea
