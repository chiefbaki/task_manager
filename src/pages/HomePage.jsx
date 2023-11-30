import React, { useEffect } from 'react'
import { useTodoContext } from '../contexts/MainContext'

function HomePage() {
const {todos , getTodos} = useTodoContext()

useEffect(()=>{
    getTodos()
},[])

  return (
    <div>{
        todos.map((item)=>{
            return <div key={item.id}>{item.title}</div>
        })
    }</div>
  )
}

export default HomePage