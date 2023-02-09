import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const RecipeId = process.env.REACT_APP_RecipeId;
const RecipeKey = process.env.REACT_APP_RecipeKey;

export const getRecipes = createAsyncThunk("recipes/fetch", async ({query, mealType}) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${RecipeId}&app_key=${RecipeKey}&mealType=${mealType}`;
  // const url ="https://api.edamam.com/api/recipes/v2?type=public&q=kebap&app_id=62e033a5&app_key=729cb6811ead0fa9946909da75941584&mealType=lunch"
    

  
  try {
  
    const response = await axios.get(url);
    console.log(response.data.hits);
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }

  // const {label, images:{REGULAR}, ingredientLines} = data.hit.recipe

  // hit > recipe > {label, images:{SMALL, REGULAR}, ingredientLines, calories, mealType, totalNutrients:{ENERC_KCAL,
  // FAT, FATRN, FAMS, CHOCDF.net, SUGAR, PROCNT, CHOLE, NA, CA, MG, }  }
});
