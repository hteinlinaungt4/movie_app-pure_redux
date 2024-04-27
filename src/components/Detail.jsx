import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {api,api_key,apikey} from '../api/api'
import { useDispatch, useSelector } from 'react-redux'
import { removemovie, selectedmovie } from '../redux/actions/movie'
import { Card } from "flowbite-react";


function Detail() {
   const {id}=useParams()
   const movie=useSelector(state=>state.movieData.movie)
    const dispatch=useDispatch();
   const selectMovie = async () =>{
    const res = await api.get(`/tv/${id}?api_key=${api_key}`)
    dispatch(selectedmovie(res.data))    
   }
   useEffect(()=>{
      if(id)  selectMovie() 
      return() => (dispatch(removemovie({})))
   },[id])
  return (
    <Card
    className="max-w-md mx-auto"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {movie.original_name}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    {
      movie.overview
    }
    </p>
  </Card>
  )
}

export default Detail
