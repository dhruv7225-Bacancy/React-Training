import React, { useState } from 'react'
import Form from './Form'

export type formFieldType = "text" | "range" | "password" | "select" | "radio" | "checkbox" | "email" | "number" | "confirmPassword"|"tag"
type validationType = {
  type: "notEmpty" | "email" | "number" | "min" | "max" | "match" | "NotValidName" | "includeSpecialCharacters" | "minLen" | "maxLen"|"minTags",
  value?: number //for min max type 
  message: string
}
export type Option = {
  label: string
  value: string
}
export type FormConfigType = {
  type: formFieldType,
  id: string,
  name: string,
  label: string,
  placeholder?: string,
  required?: boolean,
  defaultValue?: string,
  value?: string | number,
  validation?: validationType[],
  options?: Option[],
  condition?: { field: string, value: string }

}

type ValidationMode = "onChange" | "onBlur" | "onSubmit"

const formConfig: FormConfigType[] = [
  {
    type: "text",
    id: "firstname",
    name: "firstname",
    label: "First Name:",
    required: true,
    validation: [
      {
        type: "NotValidName",
        message: "Enter Valid Name"
      }
    ]

  },
  {
    type: "number",
    id: "age",
    name: "age",
    label: "Age: ",
    required: true,
    validation: [
      {
        type: "min",
        value: 10,
        message: "Minimum age must be 10"
      },
      {
        type: "max",
        value: 60,
        message: "Maximum age must be 60"
      }
    ]

  },
  {
    type: "email",
    id: "email",
    name: "email",
    label: "Email: ",
    required: true,
    validation: [
      {
        type: "email",
        message: "Enter a Valid Email"
      }
    ]

  },
  {
    type: "number",
    id: "phone",
    name: "phone",
    label: "Phone Number: ",
    required: true,
    validation: [
      {
        type: "number",
        value: 10,
        message: "number should be exact 10 digits long"
      }
    ]

  },
  {
    type: "password",
    id: "password",
    name: "password",
    label: "password: ",
    required: true,
    validation: [
      {
        type: "minLen",
        value: 8,
        message: "Password must be minimum 8 char long"
      },
      {
        type: "includeSpecialCharacters",
        message: "Password must include special characters like @,#,$,% etc"
      }
    ]

  },
  {
    type: "confirmPassword",
    id: "confirmPassword",
    name: "confirmPassword",
    label: "confirmPassword: ",
    required: true,
    validation: [
      {
        type: "match",
        message: "Password and confirm password must be same"
      }
    ]

  },
  {
    type: "radio",
    id: "gender",
    name: "gender",
    label: "Gender",
    required: true,
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" }
    ]
  },
  {
    type: "number",
    id: "height",
    name: "height",
    label: "Height: ",
    condition: {
      field: "gender",
      value: "male"
    }
  },
  {
    type: "number",
    id: "weight",
    name: "weight",
    label: "Weight: ",
    condition: {
      field: "gender",
      value: "female"
    }
  },
  {
    type: "select",
    id: "country",
    name: "country",
    label: "Country",
    placeholder: "Select country",
    options: [
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "Canada", value: "canada" }
    ]
  },
  {
    type:"tag",
    id:"hobbies",
    name:"hobbies",
    label:"Hobbies: ",
    validation:[
      {
        type:"minTags",
        value:2,
        message:"Minimum 2 Hobbies required"
      }
    ]
  }
]

const App = () => {
  const [validationOn, setValidationOn] = useState<ValidationMode>("onChange");

  return (
    <>
      <div>
        <label>Validation Mode: </label>
        <p>Current validation: {validationOn}</p>
        <select value={validationOn} onChange={(e) => setValidationOn(e.target.value as ValidationMode)}>
          <option value="onChange">onChange</option>
          <option value="onBlur">onBlur</option>
          <option value="onSubmit">onSubmit</option>
        </select>
      </div>

      <Form formConfig={formConfig} changeType={validationOn} />

    </>
  )
}

export default App
