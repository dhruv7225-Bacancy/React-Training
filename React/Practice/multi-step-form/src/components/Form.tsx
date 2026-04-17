import type { InputFieldType } from "../types"
import FormField from "./FormField"


type PropsType={
    title:string,
    fields:InputFieldType[],
}

const Form = ({title,fields}:PropsType) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {
            fields && fields.map((field:InputFieldType)=><FormField key={field.name} field={field}/>)
        }
      </div>
    </div>
  )
}

export default Form
