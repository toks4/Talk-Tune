import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import SessionContextProvider  from './contexts/SessionContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <SessionContextProvider>
      <App />
    </SessionContextProvider>
    </Router>
  </React.StrictMode>
)
