import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'
import { AuthProvider } from './Context/AuthContext'

const App = () => {


  return (
    <AuthProvider>

      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
