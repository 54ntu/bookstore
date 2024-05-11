import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Toastprovider from './components/Toastprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toasprovider>
       <App />
    </Toasprovider>
  </React.StrictMode>,
)
