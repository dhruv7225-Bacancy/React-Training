
import type { InputFieldType } from '../../types'

const InputTypeSelect = ({ field }: { field: InputFieldType }) => {
    if(field.type!=="select"){
        return null
    }
    const { name, label, options, validations, defaultValue } = field 
    return (
        <>
            <label htmlFor={name}>{label}</label>
            
                <select name={name} defaultValue={defaultValue}>
                    {
                        options.map((option)=>(
                            <option key={option.value} value={option.value}>{option.label}</option>
                        ))
                    }
                </select>
            
        </>
    )
}

export default InputTypeSelect
