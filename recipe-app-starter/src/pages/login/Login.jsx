import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
// import { signIn } from "../../firebase/firebase";

import { setUser } from "../../store/slices/authSlice";
import { LoginContainer, LoginBackground } from "../../styles/Flex.styled";
import useAuthCalls from "../../hooks/useAuthCalls";



const Login = () => {
  const [loginInfo, setLoginInfo] = useState("")
const {signIn, handleGoogleSignIn, userObserver} = useAuthCalls();
 



  const handleSignIn = (e) => {
    e.preventDefault()
    const {email, password} = loginInfo;
    signIn(email, password)
  
  }
  const googleSignIn = (e) => {
    e.preventDefault();
    handleGoogleSignIn();
  }
  useEffect(() => {
    userObserver(setUser)
  }, [userObserver,setUser])
  




  return (
    <LoginBackground>
    <LoginContainer className="col col-md-12 col-lg-6">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="h5">Email</Form.Label>
        <Form.Control type="email" onChange={e=>setLoginInfo({...loginInfo, email:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="h5">Password</Form.Label>
        <Form.Control type="password" onChange={e=>setLoginInfo({...loginInfo, password:e.target.value})} />
      </Form.Group>
      <div>
        <Button variant="danger me-3 " className="px-3" type="submit" onClick={handleSignIn}>
          Login
        </Button>
        <Button variant="danger ms-2  " className="px-4" type="submit" onClick={googleSignIn}>
          Login with Google
        </Button>
      </div>
   
    </Form>
  </LoginContainer>
    </LoginBackground>

  )
}

export default Login