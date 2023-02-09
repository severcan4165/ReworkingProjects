import { ImgStyled, Linkstyled, Navbar, Logo, LinkContainer, SpanStyled } from './Navbar.styled'
import chefLogo from "../../assets/chef2.png"
import bona from "../../assets/bonapetit1.png"
import { useSelector } from 'react-redux'
import useAuthCalls from '../../hooks/useAuthCalls'

const Header = () => {
  const {user} = useSelector(state => state.user)
  const {localSignOut} = useAuthCalls();
  const handleLogout = () => {
    localSignOut();
  }
  return (
    <Navbar className='navbar'>
      <Logo>
        <div>
        <ImgStyled src={chefLogo} alt="" />
        </div>
 <div>
 <ImgStyled src={bona} alt=""  />
 </div>

      </Logo>
      <LinkContainer>
      <Linkstyled to="/">Home</Linkstyled>
      <Linkstyled to="/about">About</Linkstyled>

      <Linkstyled className={user && "d-none"} to="/register">Register</Linkstyled>
      
      {user ? (<SpanStyled  onClick={handleLogout}>Log Out </SpanStyled>): (<Linkstyled to="/login" >Login</Linkstyled>)}
    
      </LinkContainer>

 
    </Navbar>
  )
}

export default Header
