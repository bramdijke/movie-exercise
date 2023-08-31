import React, { useEffect, useState } from 'react';
import { IMDBMovie } from '../model/movie';
import MovieCard from './MovieCard';

type Props = {
  searchValue: string;
}

const MovieList = ({ searchValue }: Props) => {
  const [data, setData] = useState<IMDBMovie[] | null>(null); 
  // const searchValue = '';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=1a993ee0&s=${searchValue}`);
        const jsonData = await response.json();
        setData(jsonData.Search); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <div>
      {data ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item: IMDBMovie) => (
            <MovieCard key={item.imdbID} movie={item} />
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MovieList;