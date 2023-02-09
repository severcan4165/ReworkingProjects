import { createSlice } from "@reduxjs/toolkit";
import { getRecipes } from "../thunks/fetchRecipes";


const recipeSlice = createSlice({
    name:"recipe",
    initialState:{
        mealList:[],
        isLoading:false,
        error:null,
    },
    reducers:{
        setMealList:(state, action) => {
          state.mealList = []
        }
    },
    extraReducers(builder){
        builder.addCase(getRecipes.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getRecipes.fulfilled, (state, action) => {
            state.isLoading = false;
            state.mealList = action.payload;
            console.log(action)
        });
        builder.addCase(getRecipes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }

})

export const {setMealList} = recipeSlice.actions;
export const RecipeReducer = recipeSlice.reducer;