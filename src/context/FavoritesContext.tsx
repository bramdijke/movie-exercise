import React, { createContext, useContext, useState, useEffect } from 'react';
import { IMDBMovie } from '../model/movie';
import { ReactNode } from 'react';

interface FavoritesContextType {
  favoriteMovies?: IMDBMovie[];
  setFavoriteMovies?: React.Dispatch<React.SetStateAction<IMDBMovie[]>>;
  updateFavoriteMovie?: (imdbID: string, updatedMovie: IMDBMovie) => void;
  deleteFavoriteMovie?: (imdbID: string) => void;
  updateFavoritesLS: (updatedFavorites: IMDBMovie[]) => void
}
export const FavoritesContext = createContext<FavoritesContextType>({});

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMDBMovie[]>([]);

  const getFavoritesLS = () => {
    const favoriteLS = localStorage.getItem('favorites');
    const favoriteMoviesData: IMDBMovie[] = favoriteLS ? JSON.parse(favoriteLS) : [];
    setFavoriteMovies(favoriteMoviesData);
  };

  useEffect(() => {
    getFavoritesLS();
  }, []);

  const updateFavoritesLS = (updatedFavorites: IMDBMovie[]) => {
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const updateFavoriteMovie = (imdbID: string, updatedMovie: IMDBMovie) => {
    const updatedFavorites = favoriteMovies.map((movie) => {
      if (movie.imdbID === imdbID) {
        return updatedMovie;
      }
      return movie;
    });
    setFavoriteMovies(updatedFavorites);
    updateFavoritesLS(updatedFavorites);
  };

  const deleteFavoriteMovie = (imdbID: string) => {
    const updatedFavorites = favoriteMovies.filter((movie) => movie.imdbID !== imdbID);
    setFavoriteMovies(updatedFavorites);
    updateFavoritesLS(updatedFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteMovies,
        setFavoriteMovies,
        updateFavoriteMovie,
        deleteFavoriteMovie, 
        updateFavoritesLS
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
