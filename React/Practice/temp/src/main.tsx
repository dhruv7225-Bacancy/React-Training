import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'
import Home from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    // <RouterProvider router={router}/>
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  // {/* </StrictMode>, */}
)
