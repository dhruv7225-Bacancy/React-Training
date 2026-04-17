import React from 'react'
import { Link } from 'react-router-dom'

const Step1 = () => {
  return (
    <div>
      <p>this is step1</p>
      <Link to="/step2">next</Link>
    </div>
  )
}

export default Step1
