import React, { useEffect } from 'react'
import List from './List'
import { api, api_key } from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { fetchmovie } from '../redux/actions/movie';
import { Link } from 'react-router-dom';

function Home() {
  const dispatch =useDispatch();
  const movies=useSelector(state => state.movieData.movies)
  const fetchmovies = async () =>{
    const res=await api.get(`/tv/popular?language=en-US&page=1?api_key=${api_key}`)
      dispatch(fetchmovie(res.data.results))
  }
  useEffect(() => {
    fetchmovies();
  }, [])
  
  return (  
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto'>
          {
            movies.map((movie,index)=>(
              <Link to={`movie/${movie.id}`} key={index}>
                <List  movie={movie}></List>
              </Link>
            ))
          }          
        </div>

  )
}

export default Home
