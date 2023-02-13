import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../../type";
import { getMovies, searchMovies } from "../thunks/getMovies";

interface IInitialState {
    isLoading:boolean,
    movieData:IData[] | null,
    error: null | string
}
const initialState:IInitialState = {
    isLoading:false,
    movieData:null,
    error:null,
}

const movieSlice = createSlice({
    name:"movie",
    initialState:initialState,
    reducers:{
        setMovieList:(state:IInitialState,action:PayloadAction<IData[]>)=>{
            state.movieData = action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getMovies.fulfilled, (state,action:PayloadAction<IData[]>) => {
            state.isLoading = false;
            state.movieData = action.payload
        })
        builder.addCase(getMovies.rejected, (state,action:PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload


        })
        builder.addCase(searchMovies.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(searchMovies.fulfilled, (state,action:PayloadAction<IData[]>) => {
            state.isLoading = false;
            state.movieData = action.payload
        })
        builder.addCase(searchMovies.rejected, (state) => {
            state.isLoading = false;
        })
    }

})

export const {setMovieList} = movieSlice.actions;
export const MovieReducer = movieSlice.reducer; 