import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { getMovies, searchMovies } from '../store/thunks/getMovies';
import { IData, IReducer } from '../type';
import { AppDispatch } from "../store/store"
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid';
const Home = () => {
  const [query, setQuery] = useState<string>("")
  const { isLoading, movieData } = useSelector((state: { movie: IReducer }) => state.movie)
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovies())
  }, [])


  const handleClick = () => {
    dispatch(searchMovies(query))
    // movieData?.map((item: IData) => console.log(item.popularity))
  }
  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={8} lg={12}>
        <TextField
        type="text"
        value={query}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>Search</Button>
        </Grid>

      </Grid>
      <Grid container spacing={2}>

        { movieData?.map((item: IData, index:number) =>{
          return(
            <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3}>
                {item.original_title}
                {item.overview}
                {item.release_date}
                {item.vote_average}
         
            </Grid>
          )
        } )}
      

      </Grid>

  
    </>
  )
}

export default Home