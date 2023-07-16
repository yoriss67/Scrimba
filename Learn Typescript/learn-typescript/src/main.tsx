import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Gpt from './Gpt.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Gpt />
  </React.StrictMode>,
)
