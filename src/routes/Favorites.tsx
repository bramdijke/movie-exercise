import React, { FunctionComponent } from 'react';
import FavoriteMovieCard from '../components/FavoriteMovieCard';
import { IMDBMovie } from '../model/movie';

const Favorites: FunctionComponent = () => {
  const favorites: IMDBMovie[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return (
    <div>
      {favorites.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie: IMDBMovie) => (
            <FavoriteMovieCard key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;