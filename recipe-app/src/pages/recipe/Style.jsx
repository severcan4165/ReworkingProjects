import styled from 'styled-components';
import ff from "../../assets/home6.jpg"

const Card = styled.div`
  


background-image:url(${ff}) ;
background-repeat: no-repeat;
color:white;
background-size: cover;
  padding:2rem;
  display:flex;
  justify-content:center;
  align-items:center;
 flex-direction: column;
  @media only screen and (min-width: 576px) {

    flex-direction:row;
    margin-top: 12vh;
  }

  
`;
export const Card1 = styled.div`

background: rgb(175,168,168);
background: radial-gradient(circle, rgba(30, 30, 30, 0.81) 0%, rgba(20, 20, 20, 0.76) 100%);
padding:2rem;
width:50vw;
font-size:1rem;
@media only screen and (min-width: 576px) {


  height: 60vh;
}
`;

export const Card2 = styled.div`
padding:2rem;
background: rgb(175,168,168);
background: radial-gradient(circle, rgba(30,30,30,0.81) 0%, rgba(20,20,20,0.76) 100%);
width:50vw;
font-size:1.3rem;
line-height:1.2;
@media only screen and (min-width: 576px) {

  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

   
`;
export const Card3 = styled.div`
display:flex;
 border-radius:1rem;
height:auto;
 overflow:hidden;
justify-content:center;
align-items:center;
flex-direction:column;
@media only screen and (min-width: 576px) {

flex-direction:row;
}
`;

export const Image = styled.img`
width:35vw;
height:35vh;
object-fit: cover;
border-radius:0.3rem;

   
`;



export default Card;
