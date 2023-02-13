import  TextField  from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Formik, Form } from 'formik'
import * as yup from "yup";
import { useAuthCalls } from '../hooks/useAuthCalls';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please  enter an email"),
  password: yup
    .string()
    .required("Please enter a password ")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/ahmet-salih-severcan/">
        A. Salih SEVERCAN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const theme = createTheme();
const Register = () => {
  const {SignUp} = useAuthCalls();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/featured/?movie)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
             <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
      <Formik
      initialValues={{email:"",password:""}}
      validationSchema={loginSchema}
      onSubmit={(values,actions)=>{
        SignUp(values.email, values.password);
        actions.resetForm();
        actions.setSubmitting(false);
      }}
      >
        {({values, isSubmitting, handleChange, touched, errors, handleBlur}) =>(
          <Form>
            <Box>
              <TextField
                   margin="normal"
                   required
                   fullWidth
                   autoComplete="email"
                   autoFocus
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              value={values.email}
              onBlur = {handleBlur}
              onChange={handleChange}
              error = {touched.email && Boolean(errors.email)}
              helperText = {touched.email && errors.email}
              />
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  autoComplete="current-password"
              label="Password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              value={values.password}
              onBlur = {handleBlur}
              onChange={handleChange}
              error = {touched.password && Boolean(errors.password)}
              helperText = {touched.password && errors.password}
              />
              <Button
                  type="submit"
                  fullWidth
                  variant="contained">
            Sign Up
              </Button>
           
            </Box>

          </Form>
        ) }
        
      </Formik>
      <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/login" variant="body2">
                    {"Already have an account? Sign in"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
      </Box>
      </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Register