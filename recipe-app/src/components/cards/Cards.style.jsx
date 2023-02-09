import styled from "styled-components";
import { Flex } from "../../styles/Flex.styled";


export const RecipeCard = styled.div`
margin: 0 auto;
padding: 1rem !important;
box-sizing: border-box !important;
background: #fff;
/* box-shadow: rgba(15, 8, 69, 0.926) 0px 10px 20px, rgba(26, 4, 73, 0.877) 0px 10px 20px; */
box-shadow: rgba(21, 3, 101, 0.488) 0px 5px 15px;
width: 80vw;
border-radius: 0.4rem;
  @media only screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 23vw;
    max-height: 60vh;


  }


`;
export const Hdiv = styled.div`
width: 100%;
max-height: 3rem ;
`;
export const CardImage = styled.div`

  width: 100%;

   
`;

export const Image = styled.img`
  width: 100%;

   
`;

export const ButtonDiv = styled(Flex)`
  margin-top: 1rem;
  width: 100%;
`;

export const StyledButton = styled.button`
  width: 50%;
  background-color: #911269;
  color:white;
  border-radius: 0.4rem;
  
  
`;


