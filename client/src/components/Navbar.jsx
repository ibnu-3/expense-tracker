import React from 'react'
import { useAuth } from '../context/useAuth'
import {Link} from 'react-router-dom'
const Navbar = () => {
    const {user,logout}=useAuth()
  return (
    <div className='flex justify-between items-center border-b drop-shadow-lg p-4 bg-white'>
        <Link to={'/'} className='text-xl italic font-bold'>Expense Tracker</Link>
       {!user ? <div className='flex gap-3'>
        <Link className='px-4 py-2 border-2 border-slate-50 bg-slate-300 rounded-md text-black hover:border-blue-500' to={'/login'}>Login</Link>
        <Link className='px-4 py-2 border-2 border-purple-50 bg-purple-700 rounded-md text-white hover:border-blue-500' to={'/register'}>Register</Link>
       </div>
        : <div className='flex gap-3'>
        <div className='h-10 w-10 rounded-full flex items-center justify-center text-white bg-purple-700'>{user.name[0].toUpperCase()}</div>
        <button onClick={logout} className='px-3 py-1.5 rounded-md bg-red-500 text-white'>Logout</button>
        </div>}
    </div>
  )
}

export default Navbar