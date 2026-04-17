import React, { useMemo, useState } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Step1 from './components/Step1'
import Step2 from './components/Step2'

const App = () => {
  return (
    <div>
      <MemoryRouter initialEntries={['/step1']}>
        <Routes>
          <Route path='/step1' element={<Step1/>}/>
          <Route path='/step2' element={<Step2/>}/>
          <Route path='/done' element={<div>Submitted</div>}/>
        </Routes>
      </MemoryRouter>
    </div>
  )
}
export default App
