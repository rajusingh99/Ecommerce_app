
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Login() {
	const  navigate = useNavigate();
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [error, setError] = useState(null);

	const handleLogin = async () => {
		try {
			const response = await axios.post('https://dummyjson.com/auth/login', {
			firstName,
			lastName,
		});
		const { token } = response.data;
		localStorage.setItem('token', token);
		  navigate('/products');
		} catch (error) {
			setFirstName('')
			setLastName('')
;		      setError('Invalid credentials. Please try again.');
		}};

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{   marginTop: 8,   display: 'flex',   flexDirection: 'column',   alignItems: 'center', }} >
          <Typography component="h1" variant="h5"> Sign in</Typography>
          <Box component="form" sx={{ mt: 1 }}>
				<TextField margin="normal" required fullWidth id="First_name" label="First Name" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} autoComplete="firstName" autoFocus />
				<TextField margin="normal" required fullWidth name="lastName" label="Last Name" type="text" id="last_name"  value={lastName} onChange={(e) => setLastName(e.target.value)} autoComplete="current-password"/>
				<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
				<Button  onClick={handleLogin} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>   Sign In </Button>
               {error && <p style={{ color: 'red' }}>{error}</p>}
		    <Grid container>
              <Grid item xs><Link href="#" variant="body2">  Forgot password?</Link></Grid>
              <Grid item><Link href="#" variant="body2">  {"Don't have an account? Sign Up"}</Link> </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}