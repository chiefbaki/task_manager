import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { API } from '../utils/consts'

const todoContext = createContext()

export function useTodoContext() {
    return useContext(todoContext)
}

function MainContext({children}) {
    const [todos , setTodos] = useState([])

    async function getTodos() {
       try {
        const {data} = await axios.get(API)
        console.log(data);
        setTodos(data)
       } catch (error) {
        console.log(error);
       }
    }

    const value = {
        todos,
        getTodos,
    }
  return (
    <todoContext.Provider value={value}>{children}</todoContext.Provider>
  )
}

export default MainContext