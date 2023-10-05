import React, { createContext, useContext, useState } from 'react';
import { IMDBMovie } from '../model/movie';
import { ReactNode, useEffect } from 'react';

interface FavoritesContextType {
  favoriteMovies: IMDBMovie[];
  setFavoriteMovies: React.Dispatch<React.SetStateAction<IMDBMovie[]>>;
  updateFavoriteMovie: (imdbID: string, updatedMovie: IMDBMovie) => void;
}
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMDBMovie[]>([]);

  const getFavoritesLS = () => {
    const favoriteLS = localStorage.getItem('favorites');
    const favoriteMoviesData: IMDBMovie[] = favoriteLS ? JSON.parse(favoriteLS) : [];
    setFavoriteMovies(favoriteMoviesData);
  };

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
    updateFavoritesLS(updatedFavorites);
  };

  useEffect(() => {
    getFavoritesLS();
  }, []);

  return (
    <FavoritesContext.Provider value={{ favoriteMovies, setFavoriteMovies, updateFavoriteMovie }}>
      {children}
    </FavoritesContext.Provider>
  );
};

//CRUD FavoriteMovies