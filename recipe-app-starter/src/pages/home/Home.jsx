import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { HomeStyled, ImgLogo} from "./Home.styled";

import chef from "../../assets/homeChef.png";
import SearchForm from "../../components/search-form/SearchForm";
import { setMealList } from "../../store/slices/recipeSlice";


const Home = () => {

  const dispatch = useDispatch();

  const { mealList } = useSelector((state) => state.recipe);



  console.log(mealList);

  useEffect(() => {
    dispatch(setMealList())
  }, [dispatch, setMealList])
  



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
