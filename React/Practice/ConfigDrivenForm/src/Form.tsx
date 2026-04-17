import React, { useState } from 'react'
import InputText from './components/InputText'
import type { CategoryType } from './types';
import InputRadio from './components/InputRadio';
import InputNumber from './components/InputNumber';
import InputSelect from './components/InputSelect';
import InputCheckBox from './components/InputCheckBox';
import { validate, validationRegistry } from './validation';
import InputTag from './components/InputTag';


const fieldTypeRegistery: Record<string, React.ComponentType<any>> = {
    text: InputText,
    password: InputText,
    email: InputText,
    radio: InputRadio,
    select: InputSelect,
    checkbox: InputCheckBox,
    number: InputNumber,
    tag:InputTag
}

const Form = ({ initVal, inputs }: { initVal: Record<string, string | number | string[]>, inputs: CategoryType[]}) => {
    const [formData, setFormData] = useState<Record<string, string | number | string[]>>(initVal);
    const [errors, setErrors] = useState<Record<string, string>>({});


    // console.log(initVal)
    function handleSubmit(e) {
        e.preventDefault();
        inputs.map((input) => {
            if ("category" in input) {
                input.fields.map((inputField) => {
                
                    let err=errors[inputField.name]
                    if(inputField.validation){
                        err=validate(formData[inputField.name],inputField.validation,formData)
                    }
                    setErrors((prev)=>({
                        ...prev,
                        [inputField.name]:err
                    }))
                })
            }
            else {
            
                let err=errors[input.name]
                    if(input.validation){
                        err=validate(formData[input.name],input.validation,formData)
                    }
                    setErrors((prev)=>({
                        ...prev,
                        [input.name]:err
                    }))
                // })
            }
        })
        for(let key in errors){
            if(errors[key]){
                return null;
            }
        }
        console.log(formData)
    }
    function reset(e) {
        e.preventDefault()
        setFormData(initVal)
        setErrors({})
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                {
                    inputs.map((input) => {
                        if ("category" in input) {
                            return (
                                <fieldset key={input.category}>
                                    <legend>{input.category}</legend>
                                    {
                                        input.fields
                                            .filter((inputField) => {
                                                if ("condition" in inputField) {
                                                    const condition = inputField.condition;
                                                    if (condition && formData[condition.field] && formData[condition.field] === inputField.condition?.value) {
                                                        return true
                                                    }
                                                    // delete formData[inputField.name]
                                                    formData[inputField.name]=""
                                                    return false
                                                }
                                                return true
                                            })
                                            .map((inputField) => {

                                                const Component = fieldTypeRegistery[inputField.type]
                                                // console.log("input field",inputField)
                                                return (
                                                    <Component
                                                        formData={formData}
                                                        setFormData={setFormData}
                                                        key={inputField.id}
                                                        errors={errors}
                                                        setErrors={setErrors}
                                                        {...inputField}
                                                    />
                                                )
                                            })
                                    }
                                </fieldset>)
                        }
                        else {
                            const Component = fieldTypeRegistery[input.type]
                            return (
                                <Component
                                    formData={formData}
                                    setFormData={setFormData}
                                    key={input.id}
                                    errors={errors}
                                    setErrors={setErrors}
                                    {...input}
                                />
                            )
                        }
                    })
                }
                <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <input type="submit" />
                    <button onClick={reset}>reset</button>
                </div>
            </form>

        </>
    )
}

export default Form
