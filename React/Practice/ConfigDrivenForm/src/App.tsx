import React, { useState } from 'react'
import { inputs } from './inputs'
import Form from './Form'
import type { CategoryType } from './types'




const App = () => {
  function init(inputsArr:CategoryType[]){
    const obj: Record<string, string|number|string[]> = {}
    const defaultVal={
      "text":"",
      "password":"",
      "number":0,
      "email":"",
      "checkbox":[],
      "select":"",
      "radio":""
    }
    inputsArr.map((inputField)=>{
      if("category" in inputField){
        inputField.fields.map((inp)=>{
          if("defaultValue" in inp){
            obj[inp.name]=inp.defaultValue
          }
          else if(defaultVal[inp.type]){
            obj[inp.name]=defaultVal[inp.type]
          }
          else{
            obj[inp.name]=""
          }
          
        })
      }
      else{
        
          if("defaultValue" in inputField){
            obj[inputField.name]=inputField.defaultValue
          }
          else if(defaultVal[inputField.type]){
            obj[inputField.name]=defaultVal[inputField.type]
            // inputField.defaultValue=defaultVal[inputField.type]
          }
          else if(inputField.type==="tag"){
            obj[inputField.name]=[]
          }
          else{
            obj[inputField.name]=""
            // inputField.defaultValue=defaultVal[inputField.type]
          }
          
        
      }
    })
    return obj
  }

  
  return (
    <>
      <Form 
        initVal={init(inputs)}
        inputs={inputs}
        
      />
      
    </>
  )
}

export default App
