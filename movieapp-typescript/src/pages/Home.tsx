import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from "react-redux"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { getMovies, searchMovies } from '../store/thunks/getMovies';
import { IData, IReducer } from '../type';
import {AppDispatch} from "../store/store"
const Home = () => {
const [query, setQuery] = useState<string>("")
const {isLoading, movieData} =  useSelector((state:{movie:IReducer}) => state.movie)
const dispatch = useDispatch<AppDispatch>();

useEffect(() => {
  dispatch(getMovies())
}, [])


const handleClick = () => {
  dispatch(searchMovies(query))
  movieData?.map((item:IData) => console.log(item.popularity))
}
  return (
    <Box>
      <TextField
      type="text"
      value={query}
      name="query"
      onChange={(e)=>setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Search</Button>
    </Box>
  )
}

export default Home