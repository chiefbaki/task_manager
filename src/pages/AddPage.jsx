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
import { Navigate, useNavigate } from 'react-router-dom';



const defaultTheme = createTheme();

export default function AddPage() {

const [state, setstate] = React.useState({
  title: "",
  completed: false,
  userId: "2",
})

const {AddTodo} = useTodoContext()
const navigate = useNavigate()
function handleChange(e) {
  setstate({...state,title: e.target.value})
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   title: data.get('title'),
    //   completed: true,
    //   userId: "2",
    // });
    AddTodo({
        title: data.get('title'),
        completed: true,
        userId: "2",
      })
    //  navigate('/')
    setstate({
      title: "",
      completed: false,
      userId: "2",
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
            < AddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Todo
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              value={state.title}
              margin="normal"
              required
              fullWidth
              label="Title"
              name="title"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add new Todo
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}