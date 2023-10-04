import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import FavoriteMovieCard from '../components/FavoriteMovieCard';
import { IMDBMovie } from '../model/movie';
import { FavoritesContext } from '../context/FavoritesContext';

const Favorites: FunctionComponent = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    return <div>Loading..</div>
  }
  const { favoriteMovies, setFavoriteMovies } = context;

  useEffect(() => {
    const favoriteLS = localStorage.getItem("favorites");
    const favoriteMoviesData: IMDBMovie[] | null = favoriteLS ? JSON.parse(favoriteLS) : null;
    if (favoriteMoviesData) {
      setFavoriteMovies(favoriteMoviesData);
    }
  }, []);

  const handleDeleteMovie = (imdbID: string) => {
    const updatedMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
    setFavoriteMovies(updatedMovies);
    localStorage.setItem("favorites", JSON.stringify(updatedMovies));
  };

  console.log(favoriteMovies)

  return (
    <div>
    <h2 className='text-xl font-medium pb-4 flex'>Favorite Movies</h2>
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {favoriteMovies.map((movie: IMDBMovie) => (
        <FavoriteMovieCard key={movie.imdbID} movie={movie} onDelete={handleDeleteMovie} />
      ))}
    </ul>
    </div>
  );
};

export default Favorites;