export type BaseInputType={
    name:string,
    label:string,
    id:string,
    placeholder?:string,
    required?:boolean,
    validation?:ValidationType[],
    condition?:Condition
    
}
export type Condition={
    field:string,
    value:string
}
export type CategoryType={
    category:string,
    fields:InputFieldTypes[]
} | InputFieldTypes //only single field
export type ValidationType=
    (| { 
        type:"required"
        }
    | { 
        type:"min"|"max"|"minLen"|"minTags"
        value:number
    }
    | {
        type:"email"|"includeSpecialCharacters"|"NotValidName"|"phoneNumber"
        regex:RegExp
    }
    | {
        type: "match"
        ref:"password"
    }
)&{message:string}

export type FormFieldInput={
    type:"text"|"email"|"password"
    defaultValue?:string
}&BaseInputType

type FormFieldInputNumber={
    type:"number"
    defaultValue?:number
}&BaseInputType

type FormFieldInputTags={
    type:"tag"
    defaultValue?:[]
}&BaseInputType


export type Option={
    name :string,
    value:string
}
export type FormFieldInputSelect={
    type:"select"|"radio"|"checkbox"
    options:Option[]
    defaultValue?:string
}&BaseInputType

export type InputFieldTypes=
    | FormFieldInput
    | FormFieldInputSelect 
    | FormFieldInputNumber
    | FormFieldInputTags


export type PropsTypeSelect = {
    formData: Record<string, string | number | string[]>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string | number | string[]>>>
    validation: ValidationType[],
    options: Option[],
    label: string,
    errors: Record<string, string>,
    setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>
} & Pick<InputFieldTypes, "type" | "id" | "name" | "required">