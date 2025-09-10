import { useEffect, useState } from "react"
import { AuthContext } from "./useAuth"
import axiosInstance from "../utils/axios"
import { useNavigate } from "react-router-dom"

export const AuthProvider =({children})=>{
    const[user, setUser]=useState(null)

    const navigate =useNavigate()

    useEffect(()=>{
      const storedToken = localStorage.getItem('token');
      if(storedToken){
        const fetchUser= async () => {
        
           try {
             const response =await axiosInstance.get('/users/me',{
                headers:{'Authorization':`Bearer ${storedToken}`}
            })
            setUser(response.data)
           
           } catch (error) {
            console.error('error fetching user info', error)
            localStorage.removeItem('token')
            setUser(null)
           }
        }
        fetchUser()
      }
    },[])

    const login = async ({email, password}) => {
     
      try {
        const response = await axiosInstance.post('/users/login', {email, password})
       const {token}=response.data;
       localStorage.setItem('token', token)
       setUser(response.data)
        console.log(response.data)
       
      } catch (error) {
        console.error('failed to login', error.message)
        throw new Error(error);        
      }
    }
    const register = async ({name,email, password}) => {
      try {
        
        const response = await axiosInstance.post('/users', {name,email, password})
      const {token}=response.data;
       localStorage.setItem('token', token)
       setUser(response.data)
      
       navigate('/')
      } catch (error) {
        console.error('failed to register', error)
        throw new Error(error);        
      }
    }
    const logout =()=>{
      localStorage.removeItem('token')
      setUser(null)
      navigate('/login')
    }
  const value={logout,login, register,user, setUser}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
