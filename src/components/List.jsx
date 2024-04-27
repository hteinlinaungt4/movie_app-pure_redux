import React from 'react'
import { Card } from "flowbite-react";


function List({movie}) {
  return (
    <Card
      className="max-w-sm mx-auto"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {movie.original_name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      {
        (movie.overview) ? movie.overview.slice(0,100)+"  ....." : "Just Not Avaliable"
      }
      </p>
    </Card>

  )
}

export default List
