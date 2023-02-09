import { configureStore } from "@reduxjs/toolkit";
import {AuthReducer} from "./slices/authSlice"
import {RecipeReducer} from "./slices/recipeSlice"

const store = configureStore({
    reducer:{
        user: AuthReducer,
        recipe: RecipeReducer,
    }
});
export default store;
export  {getRecipes} from "./thunks/fetchRecipes"

