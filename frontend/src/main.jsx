import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from '@/lib/router'
import { RouterProvider } from 'react-router'
import './css/index.css'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

