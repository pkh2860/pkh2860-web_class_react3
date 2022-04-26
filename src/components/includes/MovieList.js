import React from 'react'
import MovieItem from './MovieItem';


function MovieList(props) {
  return (
    <div className='movie__list' color="light">
        <ul>
             {props.videos.map((list, index) =>(
                <MovieItem key={index} video={list}/>
            ))}
        </ul>
    </div>
  )
}

export default MovieList