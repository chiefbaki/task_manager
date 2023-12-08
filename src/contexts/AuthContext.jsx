import React, { createContext, useContext, useState } from 'react'
import { auth } from '../../firebase'

const authContext = createContext()

export function useAuthContext() {
    return useContext(authContext)
    
}

function AuthContext({children}) {
    const [user , setUser] = useState(true)

    async function register(email, password) {
        try {
            await createUserWithEmailAndPassword(auth , email , password)
            
        } catch (error) {
            console.log(error);
        }
    }


    const value = {}
  return (
    <authContext.Provider value={value}>{children}</authContext.Provider>
  )
}

export default AuthContext