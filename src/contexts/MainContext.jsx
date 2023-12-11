import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
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

    async function AddTodo(todo) {
      try {
        await axios.post(API , todo)
      } catch (e) {
        console.log(e);
      }
    }

    async function DeleteTodo(id) {
      try {
        await axios.delete(`${API}/${id}`)
      } catch (e) {
        console.log(e);
      } 
    }

    async function UpdateTodo(id , todo) {
      try {
        await axios.patch(`${API}/${id}`, todo)
      } catch (e) {
        console.log(e);
      }
      
    }

    useEffect(()=>{
      // AddTodo({
      //   title:"test",
      //   completed:false,
      //   userId:"1"
      // })
      // DeleteTodo(32)
      // UpdateTodo(31 , 
      //   {
      //     "title": "Updated Todo",
      //     "completed": true,
      //     "userId": "2",
      //   })
    },[])

    const value = {
        todos,
        getTodos,
        UpdateTodo,
        DeleteTodo,
        AddTodo,
    }
  return (
    <todoContext.Provider value={value}>{children}</todoContext.Provider>
  )
}

export default MainContext