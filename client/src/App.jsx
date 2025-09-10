import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import PrivateRoute from './components/PrivateRoute'
import Expense from './pages/Expense'
import Income from './pages/Income'
import { AuthProvider } from './context/AuthContext'
const App = () => {
  return (
    <BrowserRouter>
   <AuthProvider>
     <Routes>
      <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/expense' element={<Expense/>}/>
      <Route path='/income' element={<Income/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='*' element={<Login/>}/>
    </Routes>
   </AuthProvider>
    </BrowserRouter>
  )
}

export default App