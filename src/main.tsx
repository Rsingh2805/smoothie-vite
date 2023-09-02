import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/home/index.tsx'
import Layout from './layout.tsx'
import Menu from './pages/menu/index.tsx'
import About from './pages/about/index.tsx'
import Contact from './pages/contact/index.tsx'
import Loyalty from './pages/loyalty/index.tsx'

const router = createHashRouter([
  { path: "/", element: <Layout />, children: [
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/loyalty", element: <Loyalty /> },
    { path: "/", element: <Home /> }
  ]},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
