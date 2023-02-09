import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap:3rem;
    width: 100vw;
    padding: 0 1rem;
    background-color: #022039;
    @media only screen and (min-width: 576px) {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        top:0;
        left: 0;
        z-index: 1;
        height: 12vh;
    }

`;

export const Linkstyled = styled(Link)`
text-decoration: none;
color:white;
font-size: 2.5rem;
font-family: 'Sofia Sans Extra Condensed', sans-serif;
&:hover{
    color:red;
}

`;

export const ImgStyled = styled.img`
   width: 15vw;

   height: 15vh;

    margin: 1rem;


    @media only screen and (min-width: 576px) {

        width: 8vw;
        height: 8vh;
        margin: 0;
    }

`;

export const Logo = styled.div`
    height: 15vh;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
    @media only screen and (min-width: 576px) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 12vh;

    }
`;

export const LinkContainer = styled.div`
        display: flex;
        flex-direction: column;

        height: auto;

        @media only screen and (min-width: 576px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap:2rem;
        height: 12vh;
  
    }
`;

export const SpanStyled = styled.span`
text-decoration: none;
color:white;
font-size: 2.5rem;
font-family: 'Sofia Sans Extra Condensed', sans-serif;
cursor: pointer;
&:hover{
    color:red;
}
`;