import React from 'react'

const Movie = ({movie}) => {

  return (
    <>
        <h2>{movie.primaryTitle}</h2>
        <img src={movie.primaryImages} alt={movie.primaryTitle} />
        <p>{movie.startYear}</p>
        <p>{movie.genres}</p>
    </>
  )
}

export default Movie