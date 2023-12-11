import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useTodoContext } from '../contexts/MainContext';
import { useNavigate } from 'react-router-dom';

function TodoItem({ item }) {
  const { DeleteTodo } = useTodoContext();
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate()

  const handleDelete = () => {
    DeleteTodo(item.id);
    setIsDeleted(true);
  };

  if (isDeleted) {
    return null; // Render nothing if the item is deleted
  }

  return (
    <div className="todo-item">
      <span>{item.title}</span>
      <div>
        <Button id={item.id} className="edit-btn" onClick={()=> navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button id={item.id} className="delete-btn" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;
