import styled from "styled-components";
import home from "../../assets/home7.jpg"
import recipeS from "../../assets/recipesmall.jpg"


 // ! Home sayfasının kapsayıcı divi 

export const HomeStyled = styled.div`
box-sizing: border-box;
border: 0.1px;
width: 100vw;
height: 100vh;
margin: 0 !important;
padding: 0 !important;
background:#ddd;
background:${({recipe}) => (recipe?.length > 0 ? "red" : `url(${recipeS}) no-repeat top`  )};
background-size:${({recipe}) => (recipe?.length < 1 && "cover" )};

    @media only screen and (min-width: 576px) {
        margin: 0 !important;
padding: 0 !important;
        background:${({recipe}) => (recipe?.length > 0 ? "red" : `url(${home}) no-repeat top`  )};
        background-size:cover;
        /* width:100%; */
        /* overflow-x:hidden; */
        
    }
`; 

// !  FormDiv, anasayfadaki input formlarını kapsıyor 

export const FormDiv = styled.div`
width: 90vw;
  margin:2rem auto !important;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: #c8881985;
  color:black;
@media only screen and (min-width:576px){
    display: flex;
    justify-content:space-between ;
    gap:1rem;
    flex-direction: ${({recipe}) => (recipe?.length > 0 ? "row" : `column`  )};
    margin: ${({recipe}) => (recipe?.length > 0 ? "15vh auto !important" : `15vh 7rem !important`  )};
    /* margin:15vh 1rem !important; */
    width: ${({recipe}) => (recipe?.length > 0 ? "90vw" : `30vw`  )};
    height: ${({recipe}) => (recipe?.length > 0 ? "20vh" : `45vh`  )};
  
  
}

`;

export const InputDiv = styled.div`
    width: 90%;
    @media only screen and (min-width:576px){
        box-sizing: border-box;
    width: ${({recipe}) => (recipe?.length > 0  ? "30%" : `100% !important`  )};
    height: ${({recipe}) => (recipe?.length > 0  ? "25vh" : `12vh`  )};


    width: 30%;
}
`;






// !  Home sayfasının açılışındaki şef logosu
export const ImgLogo = styled.div`
display:none;
@media only screen and (min-width:576px){
    display:${({recipe}) => (recipe?.length > 0 ? "none" : `block`  )};
    position:absolute;
    bottom:0;
    left:0;
  
  
}

`;

// ! form

export const StyledInput = styled.input`
display: block;
width: 90%;
margin: 0.8rem aut0;
height: 40px;
border-radius:0.5rem;
padding-left:0.3rem;
border:none;
background-color: rgba(220,220,220,0.8);
color: black;

&:focus{
    outline:none;
    background-color: rgb(255,255,255);
}
`;


export const StyledButton = styled.button`

background:rgb(255, 51, 51);
margin-top:3.2rem;
  color: #fefefe;
  padding: 0.55rem 2rem;
  border:none;
  border-radius:0.5rem;
  @media only screen and (min-width: 576px) {
    margin-top:${({recipe}) => (recipe?.length > 0 ? "3.2rem" : `1rem`  )};
  }
  cursor: pointer;
  &:hover{
    transform:scale(0.97);
  }
`;

export const StyledSelect = styled.select`
display: block;
margin: 0.8rem aut0;

width: 90%;
height: 40px;
border-radius:0.5rem;
padding-left:0.3rem;
border:none;
background-color: rgba(220,220,220,0.8);
color: black;
text-align:center;
&:focus{
    outline:none;
    background-color: rgb(255,255,255);
}
`;

export const StyledLabel = styled.label`
font-size:2.2rem;

`;