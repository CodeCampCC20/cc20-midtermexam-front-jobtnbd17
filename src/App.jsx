import React from 'react'
import AppRouter from './router/AppRouter'
import { ToastContainer } from 'react-toastify'
import LoginPage from './pages/LoginPage'

function App() {
  return (
   <div>
    <ToastContainer/>
    <AppRouter/>
   </div>
  )
}

export default App