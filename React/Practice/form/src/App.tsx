import React from 'react'
import Form from './Form';

const formConfig = [
  { label: "Name", name: "name", type: "text" },
  {
    label: "Email", name: "email", type: "email",required:true, validation: {
      required: "Email required"
    }
  },
  { label: "Age", name: "age", type: "number", validation:{
    min:{
      value:10,
      message:"min length 10"
    }
  } },
  { label: "country", name: "country", type: "select", options: ["a", "b", "c"] },
  { label: "gender", name: "gender", type: "radio", options: ["male", "female"] },
  { label: "hobby", name: "hobby", type: "checkbox", options: ["A", "B", "C", "D"] },

];
const App = () => {
  return (
    <Form formConfig={formConfig} /> // through react hook form

    
  )
}

export default App
