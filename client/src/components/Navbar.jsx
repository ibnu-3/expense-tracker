import React from 'react'
import useAuth from '../context/useAuth'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const {user,logout} =useAuth()
    const navigate= useNavigate()
    const handleLogout=async ()=>{
        await logout()
        navigate('/login')
    }
  return (
    <div className='flex items-center justify-between border-b border-slate-50 p-2 bg-slate-100 fixed w-full'>
        <h1 className='text-2xl italic'>Expense tracker</h1>
        <div className='flex items-center gap-4'>
            <div className='h-10 w-10 rounded-full bg-purple-500 text-slate-50 font-bold flex items-center justify-center'>{user?.fullName[0].toUpperCase()}</div>
            <button className='px-4 py-2 rounded-md bg-red-500 text-slate-50' onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar