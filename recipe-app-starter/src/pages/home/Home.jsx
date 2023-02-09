import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeStyled, FormDiv, ImgLogo, StyledButton, StyledSelect, StyledLabel,StyledInput, InputDiv} from "./Home.styled";
import { getRecipes } from "../../store/thunks/fetchRecipes";
import chef from "../../assets/homeChef.png";
import Cards from "../../components/cards/Cards";
import SearchForm from "../../components/search-form/SearchForm";
import { setMealList } from "../../store/slices/recipeSlice";


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { mealList } = useSelector((state) => state.recipe);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [flag, setFlag] = useState(false)

  console.log(mealList);

  useEffect(() => {
    dispatch(setMealList())
  }, [])
  

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(query);
    dispatch(getRecipes({ query, mealType }));
    navigate("/details")
    setFlag(true)
    setQuery("");
    setMealType("");
  };

  return (
    <HomeStyled recipe={mealList}>
   
    <SearchForm/>
     
     
      <ImgLogo recipe={mealList}>
          <img src={chef} style={{ width: "20vw", height: "35vh" }} alt="" />
        </ImgLogo>
    </HomeStyled>
  );
};

export default Home;
