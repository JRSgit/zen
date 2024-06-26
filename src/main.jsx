import React from 'react'
import ReactDOM from 'react-dom/client'
import AllRouter from './router'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AllRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
