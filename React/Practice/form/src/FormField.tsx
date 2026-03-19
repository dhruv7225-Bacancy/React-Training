import React, { lazy } from 'react'

const FormField = ({ field, register,errors }) => {
        console.log("render field");

        


    switch (field.type) {

        case "text":
        case "email":
        case "password":
        case "number":
            return (
                <>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input id={field.name} type={field.type} name={field.name} {...register(field.name,field.validation)} />
                    {errors[field.name] && (<span style={{color:"red"}}> {errors[field.name].message}</span>)}
                </>
            )
        case "select":
            return (
                <>
                <label htmlFor={field.name}>{field.label}</label>
                <select id={field.name} name={field.name} {...register(field.name)}>
                    {
                        field.options.map((option: string) => (
                            <option key={option} value={option}>{option}</option>
                        ))
                    }
                </select>
                </>
                
            )
        case "checkbox":
        case "radio":
            
            return (
                <>
                <label htmlFor={field.name}>{field.label}</label>
                {field.options.map((option: string) => (
                    <div key={option}>
                        <label htmlFor={field.name}>
                            {option}
                        </label>
                        <input id={field.name} type={field.type} name={field.name} value={option}  {...register(field.name)} />
                    </div>

                ))}
                </>
            )
        default:
            return (<></>)


    }

}

export default FormField
