import React, { useEffect } from 'react'
import { useTodoContext } from '../contexts/MainContext'
import { Box, Grid } from '@mui/material'
import TodoItem from '../components/TodoItem'

function HomePage() {
const {todos , getTodos} = useTodoContext()

useEffect(()=>{
    getTodos()
},[])

  return (
    <div className='main_container'>
    <h1>Todo list</h1>
    <Box container spacing={2}>
    {
        todos.map((item)=>{
            return <TodoItem key={item.id} item={item}/>
        })
    }
    </Box>
    </div>
  )
}

export default HomePage

