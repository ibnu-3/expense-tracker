import { useState } from "react"
import { AuthContext } from "./useAuth"
import axiosInstance from "../utils/axiosInstance"

export const AuthProvider =({children})=>{
    const [user, setUser]=useState(null)

    const register = async (fullName, email, password) => {
        try {
            const response =await axiosInstance.post('/api/users/register', {fullName,email,password});
            console.log(response.data)
            setUser(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }
    const value={user, register}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}