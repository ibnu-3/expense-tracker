import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import Loader from '../components/Loader'


const Login = () => {
    const [email, setEmail]=useState('')
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)
    const [password, setPassword]=useState('')
    const {login}=useAuth()
    const navigate=useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')        
        if(!email || !password){
            setError('All fields are required')
            return;
        }  
        try {
           await login({email, password})
        navigate('/')
        } catch (error) {
          setError(error.message)
          console.log(error.message)
        } finally{
          setLoading(false)
        }    
    }
  if(loading){
    return <Loader/>
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-[40%] bg-white p-3 rounded-md'>
          <h1 className='text-xl font-bold text-center py-6'>Login</h1>
        <form onSubmit={handleLogin}>
            <div className='flex flex-col  my-2'>
                <label htmlFor="Email">Email</label>
                <input type="text" placeholder='Email' className='px-4 py-2 rounded border  focus:border-blue-600 bg-slate-200' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col  my-3'>
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder='Password' className='px-4 py-2 bg-slate-200 rounded border  focus:border-blue-600' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
           {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button className='px-4 py-2 bg-teal-700 text-white rounded-md w-full hover:bg-teal-500 my-4'>Login</button>
            <p className='text-sm text-slate-500'>Not have an account? <Link className='text-sky-500 ' to={'/register'}>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login