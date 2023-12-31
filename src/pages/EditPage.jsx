import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { useTodoContext } from '../contexts/MainContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


const defaultTheme = createTheme();

export default function EditPage() {
const {UpdateTodo, getOneTodo , OneTodo} = useTodoContext()
const [formValue , setFormValue] = React.useState({
    title:"",
})
const navigate = useNavigate()
const {id}  = useParams()

React.useEffect(()=>{
getOneTodo(id)
},[])

React.useEffect(()=>{
    OneTodo &&  setFormValue(OneTodo)
    },[OneTodo])

function handleChange(e) {
    setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
      });
    
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   title: data.get('title'),
    //   completed: true,
    //   userId: "2",
    // });
    UpdateTodo(id ,{
        title: data.get('title'),
        completed: true,
        userId: "2",
      })
      // navigate('/')
    setFormValue({
      title: "",
      
    })
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            < EditIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Todo
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
              value={formValue.title}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit Todo
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}