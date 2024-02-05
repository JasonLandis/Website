import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CountProvider } from './context/CountContext'
import { PageProvider } from './context/PageContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PageProvider>
      <CountProvider>
        <App />
      </CountProvider>
    </PageProvider>
  </React.StrictMode>,
)
