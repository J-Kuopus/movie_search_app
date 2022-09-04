import React from 'react';
import './MovieList.css';


const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <>
        {!props.movies ? null : props.movies.map((movie, index) => (
          <div className='image-container m-3' key={index}>
            <img src={movie.Poster} alt='movie poster'/>
            <div onClick={() => props.handleFavoritesClick(movie)} className='overlay d-flex flex-column align-items-center justify-content-center'>
              <p className='movie-title'>{movie.Title}</p>
              <p>{movie.Year}</p>
              <p>{movie.Type}</p>
              <FavoriteComponent />
            </div>
          </div>
        ))}
    </>
  );
};

export default MovieList;