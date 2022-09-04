import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList/MovieList';
import './App.css';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';
import AddFavorites from './components/AddFavorites/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites/RemoveFavorites';


const App = () => {
  const [ movies, setMovies ] = useState([]);
  const [ searchValue, setSearchValue ] = useState([]);
  const [ favorites, setFavorites ] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=68035866`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    } 
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse
    (localStorage.getItem('react-movie-app-favorites')
    );

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items))

  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    alert('Movie has been added to Favorites!');

  }

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    alert('Movie has been removed from Favorites!');

  }

  return (
        <div className='container-fluid movie-app'>
          <div className='row d-flex align-items-center mb-4 pt-3 pb-2' style={{ backgroundColor: '#333'}}>
                <Header heading='Movie Search App' />
                <span className='col header-text'>Type in a movie title to get started!</span>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className='d-flex flex-wrap justify-content-center'>
            <MovieList movies={movies} 
                       handleFavoritesClick={addFavoriteMovie}
                       favoriteComponent={AddFavorites}/>
          </div>
          <div className='d-flex align-items-center justify-content-center mt-4 mb-4'>
            <Header heading='Favorites' />
          </div>
          <div className='d-flex flex-wrap justify-content-center'>
            <MovieList movies={favorites} 
                       handleFavoritesClick={removeFavoriteMovie}
                       favoriteComponent={RemoveFavorites}/>
          </div>

        </div>
   )
}

export default App;