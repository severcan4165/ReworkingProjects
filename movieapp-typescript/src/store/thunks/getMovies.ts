import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IData } from "../../type";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;




export const getMovies = createAsyncThunk("movies/fetch", async():Promise<IData[]>=>{

    try {
        const {data} = await axios.get<{results:IData[]}>(url)
        return data.results;

    } catch (error:any) {
        console.log(error)

        return error.message
    }


})

export const searchMovies = createAsyncThunk("movies/search", async(query:string,thunkApi:any):Promise<IData[]>=>{
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
   
       try { 
        const {data} = await axios.get<{results:IData[]}>(searchUrl)
        // console.log(data)
        return data.results
        
       } catch (error:any) {
            const message = error.message
            return thunkApi.rejectWithValue(message);
       }

    
})


// {
//     "adult": false,
//     "backdrop_path": "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
//     "genre_ids": [
//         28,
//         12,
//         878
//     ],
//     "id": 505642,
//     "original_language": "en",
//     "original_title": "Black Panther: Wakanda Forever",
//     "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
//     "popularity": 7141.639,
//     "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
//     "release_date": "2022-11-09",
//     "title": "Black Panther: Wakanda Forever",
//     "video": false,
//     "vote_average": 7.5,
//     "vote_count": 2879
// }