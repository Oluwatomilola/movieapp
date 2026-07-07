import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div>
      <p key={movie.id} className="text-white">{movie.title}</p>
      <img src={movie.poster_path} alt={movie.title} />
    </div>
  )
}

export default MovieCard
