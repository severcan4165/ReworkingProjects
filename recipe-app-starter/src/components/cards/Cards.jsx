import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CardImage, Image, RecipeCard, StyledButton, ButtonDiv,Hdiv } from "./Cards.style";

const Cards = () => {
  const { mealList } = useSelector((state) => state.recipe);
  const navigate = useNavigate();

  return (
    <>
      {mealList?.map((item,index) => {
        return (
          <RecipeCard key={index}>

            <Hdiv>
            <h5>{item.recipe.label}</h5>
            </Hdiv>
          

            {/* <p>{item.recipe.title}</p> */}
            <CardImage>
              <Image src={item.recipe.images.REGULAR.url} />
            </CardImage>
            <ButtonDiv>
            <StyledButton
              onClick={() => navigate(`/details/${index}`, { state: item })}
            >
              Details
            </StyledButton>

            </ButtonDiv>
  
          </RecipeCard>
        );
      })}
  
    </>
  );
};

export default Cards;
