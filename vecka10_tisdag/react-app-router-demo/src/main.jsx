import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Renderar rotelementet med ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  // Använder React.StrictMode för att identifiera och fixa potentiella problem i utvecklingsläge
  <React.StrictMode>
    {/* Använder BrowserRouter för att möjliggöra klientbaserad routing */}
    <BrowserRouter>
      {/* Renderar huvudkomponenten App */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
