import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { RegisterBackground, RegisterContainer } from "../../styles/Flex.styled";
import useAuthCalls from "../../hooks/useAuthCalls";


const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({})
  const {signUp} = useAuthCalls();

  const handleSignUp = () => {
    const {email,password} = registerInfo;
    signUp(email, password)
  }
  return (
    <RegisterBackground>
   <RegisterContainer>
    <Form>
    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" />
      </Form.Group> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" onChange={e=>setRegisterInfo({...registerInfo, email:e.target.value})} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={e=>setRegisterInfo({...registerInfo, password:e.target.value})} />
      </Form.Group>
      <div className="text-center">
        <Button variant="primary mx-3 " type="submit" onClick={handleSignUp}>
          Register
        </Button>
        <Button variant="primary  " type="submit">
          SignUp with Google
        </Button>
      </div>
   
    </Form>
  </RegisterContainer>
    </RegisterBackground>
 
  )
}

export default Register
