import React, { FunctionComponent } from 'react';
import FavoriteMovieCard from '../components/FavoriteMovieCard';
import { IMDBMovie } from '../model/movie';

const Favorites: FunctionComponent = () => {
  const favoriteLS = localStorage.getItem("favorites");
  const favoriteMovies: IMDBMovie[] | null = favoriteLS ? JSON.parse(favoriteLS) : null; 
  

  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {favoriteMovies?.map((movie: IMDBMovie) => (
        <FavoriteMovieCard key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default Favorites;