import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Message from './Message'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Message />
  </React.StrictMode>,
)
