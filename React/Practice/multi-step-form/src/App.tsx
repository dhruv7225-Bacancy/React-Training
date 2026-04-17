import { useState } from "react"
import Form from "./components/Form"
import { formConfig } from "./formConfig"
import { useForm } from "./context/FormDataContext"
import { validate } from "./validations"

const App = () => {


  const {formData,setErrors,errors}=useForm()
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <div>
      <h1>{formConfig.formId}</h1>
      <h2>{formConfig.title}</h2>

      <div>
        {
          formConfig.steps.map((field, index) => {
            if (activeIndex === index) {
              return <>
                <Form key={field.id} title={field.title} fields={field.fields} />
                {
                  index !== formConfig.steps.length - 1 && (
                    <>
                      <button
                        onClick={() => {
                          setActiveIndex(prev => prev - 1)
                        }}
                        disabled={activeIndex === 0}
                      >prev</button>
                      <button
                        onClick={() => {
                          console.log("next");
                          
                          const flag=formConfig.steps[activeIndex].fields.filter(field=>validate(field.name,field.validations,formData,setErrors)).length!==0
                          if(!flag){
                            setActiveIndex(prev => prev + 1)
                          }
                          
                        }}
                        disabled={formConfig.steps[activeIndex].fields.filter((field) => errors[field.name] && errors[field.name] !== "").length !== 0}
                      >next</button>
                    </>
                  )
                }
                {
                  index === formConfig.steps.length - 1 && (
                    <button>submit</button>
                  )
                }
              </>

            }
          })
        }


      </div>
    </div>
  )
}

export default App
