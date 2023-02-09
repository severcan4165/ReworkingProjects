import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FormDiv, InputDiv, StyledButton, StyledInput, StyledLabel, StyledSelect } from '../../pages/home/Home.styled'
import { getRecipes } from '../../store/thunks/fetchRecipes';

const SearchForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { mealList } = useSelector((state) => state.recipe);
    const [query, setQuery] = useState("");
    const [mealType, setMealType] = useState("");
    // const [flag, setFlag] = useState(false)
  
    console.log(mealList);
  
    
  
    const handleSearch = (e) => {
      e.preventDefault();
      console.log(query);
      dispatch(getRecipes({ query, mealType }));
      navigate("/details")
      setQuery("");
      setMealType("");
    };

  return (
    <FormDiv recipe={mealList}>
    <InputDiv  recipe={mealList}>
      <StyledLabel htmlFor="query">Food Name</StyledLabel>
      <br />
      <StyledInput
        onChange={(e) => setQuery(e.target.value)}
      
        type="text"
        id="food"
        name="query"
        value={query}
        placeholder="Food name"
      />
      <br />
    </InputDiv>
    <InputDiv  recipe={mealList}>
      <StyledLabel htmlFor="mealType">Meal Type</StyledLabel>
      <br />
      <StyledSelect
  
        onChange={(e) => setMealType(e.target.value)}
        name="mealType"
        id="mealType"
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="snack">Snack</option>
        <option value="teatime">Tea Time</option>
        <option value="dinner">Dinner</option>
      </StyledSelect>
      <br />
    </InputDiv>
    <InputDiv  recipe={mealList}>
      <StyledButton
      recipe={mealList}
        type="submit"
        onClick={handleSearch}
        name="submit"
      >
        Search
      </StyledButton>
    </InputDiv>
  </FormDiv>
  )
}

export default SearchForm