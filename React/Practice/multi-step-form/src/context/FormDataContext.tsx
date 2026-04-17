import { createContext, useContext, useState, type JSX, type ReactNode } from "react";

const FormContext=createContext<null|FormDataType>(null)
export type FormDataType={
    formData:Record<string,string>,
    errors:Record<string,string>,
    setFormData:React.Dispatch<React.SetStateAction<Record<string,string>>>,
    setErrors:React.Dispatch<React.SetStateAction<Record<string,string>>>
}
export function useForm():FormDataType{
    const context=useContext(FormContext)
    if(context===null){
        throw new Error("loda pela context ma ja")
    }
    return context
}

export function ContextProvider({children}:{children:ReactNode}){
    const [formData,setFormData]=useState<Record<string,string>>({})
    const [errors,setErrors]=useState<Record<string,string>>({})
    return <>
    <FormContext.Provider value={{formData,setFormData,errors,setErrors}}>
        {children}
    </FormContext.Provider>
    </>
}