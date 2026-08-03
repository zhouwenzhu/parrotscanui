import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AppState from './contexts/AppState'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppState>
      <App />
    </AppState>
  </StrictMode>,
)
