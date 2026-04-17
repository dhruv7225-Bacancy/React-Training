import React from 'react'
import { useForm } from 'react-hook-form'
import FormField from './FormField';


const Form = ({formConfig}) => {
    const {register,handleSubmit,formState:{errors}}=useForm({mode: "onBlur"});
    function submit(data:any){
        console.log(data);
    }
    console.log("render");
    
  return (
    <>

    <form onSubmit={handleSubmit(submit)}>
        {formConfig.map((field:any)=>
            (
                <div key={field.name}>
                    <FormField field={field} register={register} errors={errors}/>
                </div>
            )
        )}
        <input type="submit" />
    </form>
    
    </>
  )
}

export default Form
