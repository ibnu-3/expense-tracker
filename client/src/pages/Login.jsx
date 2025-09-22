import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance'
const Login = () => {
    const [fullName, setFullName] =useState('')
    const [email, setEmail] =useState('')
    const [password, setPassword] =useState('')
    const [loading, setLoading] =useState(false)
    const [error, setError] =useState('')

    const handleSubmit = async (e) => {
        email.preventDefault()
        if(!fullName || !email || !password){
            setError('all fields are required!')
            return;
        }
        setError('')
        setLoading(true)
        try {
            const response = await axiosInstance.post('/api/users/register', {fullName,email,password})
            
        } catch (error) {
            console.log(error)
            setError(error)
        }finally{
            setLoading(false)
        }
    }
  return (
    <div className='flex items-center justify-center h-screen '>
        <div className='p-4 bg-white rounded-md w-[60%] md:w-[40%]'>
            <h1 className='text-2xl md:text-3xl text-center '>Login </h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="Name" className='block mb-2'>Full Name</label>
                    <input type="text" placeholder='your name' className='px-4 py-2 border w-full bg-slate-200 rounded-md outline-none' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="Name" className='block mb-2'> Email</label>
                    <input type="text" placeholder='your email' className='px-4 py-2 border w-full bg-slate-200 rounded-md outline-none' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block mb-2'>Password</label>
                    <input type="password" placeholder='******' className='px-4 py-2 border w-full bg-slate-200 rounded-md outline-none' />
                </div>
                <button type='submit' className='px-4 py-2 w-full text-gray-100 bg-blue-600 hover:bg-blue-700 rounded-md'>Login</button>
                <p className='text-sm text-slate-600 p-3'>Dont have an account ? <Link className='ml-3 decoration-black text-purple-500' to={'/register'} >Register</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Login