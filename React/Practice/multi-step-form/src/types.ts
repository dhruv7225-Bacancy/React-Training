export type InputFieldType = {
    name: string,
    label: string,
    type: "text" | "email" | "password",
    placeholder: string,
    defaultValue: string,
    validations: ValidationType[]
}
    | {
        name: string,
        label: string,
        type: "radio" | "select",
        defaultValue: string,
        options: Option[]
        validations: ValidationType[]
    }


type ValidationBaseType = {
    type: "required",

} | {
    type: "minLength",
    value: number
} | {
    type: "pattern",
    value: RegExp,
} | {
    type: "matchField",
    field: InputFieldType["name"],
} | {
    type: "min",
    value: number
} | {
    type: "maxLength",
    value: number
}

export type ValidationType = ValidationBaseType & {
    message: string
}

export type Option = {
    label: string,
    value: string
}

export type StepType = {
  id: string
  title: string
  fields: InputFieldType[]
}

export type FormConfigType = {
  formId: string
  title: string
  steps: StepType[]
}
