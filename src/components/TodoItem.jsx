import { Button, Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/Edit";

function TodoItem({item}) {
  return (
    <div className="todo-item">
      <span>{item.title}</span>
      <div>
        <Button id={item.id} className="edit-btn">
          Edit
        </Button>
        <Button id={item.id} className="delete-btn">
          Delete
        </Button>
      </div>
    </div>
  )
}

export default TodoItem