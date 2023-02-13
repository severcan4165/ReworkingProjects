import  TextField  from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Formik, Form } from 'formik'
import * as yup from "yup";
import { useAuthCalls } from '../hooks/useAuthCalls';
import LoadingButton from "@mui/lab/LoadingButton";

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

const Register = () => {
  const {SignUp} = useAuthCalls();
  return (
    <div>
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
              <LoadingButton
                  type="submit"
                  loadingPosition="center"
                  variant="contained">
Register
              </LoadingButton>
           
            </Box>

          </Form>
        ) }
        
      </Formik>
    </div>
  )
}

export default Register