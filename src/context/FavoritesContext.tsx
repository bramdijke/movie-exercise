import React, { createContext, useContext, useState } from 'react';
import { IMDBMovie } from '../model/movie';
import { ReactNode } from 'react';

interface FavoritesContextType {
  favoriteMovies: IMDBMovie[];
  setFavoriteMovies: React.Dispatch<React.SetStateAction<IMDBMovie[]>>;
}
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);;

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMDBMovie[]>([]);



  return (
    <FavoritesContext.Provider value={{ favoriteMovies, setFavoriteMovies }}>
      {children}
    </FavoritesContext.Provider>
  );
};
