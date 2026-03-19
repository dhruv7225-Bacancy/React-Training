import React from 'react'
import type { ValidationType,Option, FormFieldInputSelect, InputFieldTypes } from '../types'
import { validate } from '../validation'


//text password 
type PropsType={
    formData:Record<string, string | number | string[]>,
    setFormData:React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>
    validation:ValidationType[],
    label: string,
    errors:Record<string, string>,
    setErrors:React.Dispatch<React.SetStateAction<Record<string, string>>>
}& Pick<InputFieldTypes, "type" | "id" | "name"|"required"> 
const InputNumber = ({formData,setFormData,validation,label,errors,setErrors,...input}:PropsType) => {
    // console.log(input)
    function changeValue(e:React.ChangeEvent<HTMLInputElement>){
        let err=errors[input.name]
        const value=Number(e.target.value)<0?0:Number(e.target.value)
        setFormData((prev)=>{
            return {
                ...prev,
                [input.name]:value
            }
        })
        if(err!==undefined){
            err=validate(value,validation,formData)
        }
        setErrors((prev)=>({
            ...prev,
            [input.name]:err
        }))

    }
    function changeBlur(e:React.FocusEvent<HTMLInputElement, Element>){
        let err=""
        err=validate(e.target.value,validation,formData)
        setErrors((prev)=>({
            ...prev,
            [input.name]:err
        }))
    }
  return (
    <div>
        <label htmlFor={input.id}>{input.required && <sup style={{ color: "red" }}>*</sup>}{label}</label>

        <input 
            {...input}
            value={formData[input.name]?? 0}
            onChange={changeValue}
            onBlur={changeBlur}
            required={false}
        />
        {
            errors[input.name] && (<span style={{color:"red"}}>{errors[input.name]}</span>)
        }
    </div>
  )
}

export default InputNumber
