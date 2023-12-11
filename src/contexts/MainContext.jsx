import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { API } from '../utils/consts'

const todoContext = createContext()

export function useTodoContext() {
    return useContext(todoContext)
}

function MainContext({children}) {
    const [todos , setTodos] = useState([])
    const [OneTodo , setOneTodo] = useState(null)

    async function getTodos() {
       try {
        const {data} = await axios.get(API)
        setTodos(data)
       } catch (error) {
        console.log(error);
       }
    }
    async function getOneTodo(id) {
      try {
       const {data} = await axios.get(`${API}/${id}`)
       setOneTodo(data)
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
      // getOneTodo(37)
    },[])

    const value = {
        todos,
        OneTodo,
        getTodos,
        UpdateTodo,
        DeleteTodo,
        AddTodo,
        getOneTodo
    }
  return (
    <todoContext.Provider value={value}>{children}</todoContext.Provider>
  )
}

export default MainContext