import type { InputFieldType } from "../types"
import InputTypeCheckBox from "./InputComponents/InputTypeCheckBox"
import InputTypeRadio from "./InputComponents/InputTypeRadio"
import InputTypeSelect from "./InputComponents/InputTypeSelect"
import InputTypeText from "./InputComponents/InputTypeText"

const formFieldRegistry={
  text:InputTypeText,
  email:InputTypeText,
  password:InputTypeText,
  number:InputTypeText,
  radio:InputTypeRadio,
  select:InputTypeSelect,
  textarea:InputTypeText,
  checkbox:InputTypeCheckBox
}

const FormField = ({field}:{field:InputFieldType}) => {
  const Component=formFieldRegistry[field.type]

  return <Component field={field}/>
}

export default FormField
