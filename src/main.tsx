import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './common.css'
import './style/pageone.css'
import './style/pagetwo.css'
import './style/pagethree.css'
import './style/pagefour.css'
import './style/popup.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
