import React, { useEffect, useState } from 'react';
import { IMDBMovie } from '../model/movie';
import MovieCard from './MovieCard';
import { useQuery } from 'react-query';

type Props = {
  searchValue: string;
}

const MovieList = ({ searchValue }: Props) => {
  const fetchMovies = async (searchValue: string) => {
    let apiUrl = '';
    if (searchValue) {
      apiUrl = `http://www.omdbapi.com/?apikey=1a993ee0&s=${searchValue}`;
    } else {
      apiUrl = 'http://www.omdbapi.com/?apikey=1a993ee0&s=pokemon';
    }
  
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    return jsonData.Search;
  };
  
  const { data, error, isLoading } = useQuery(['movies', searchValue], () => fetchMovies(searchValue));
  

  return (
    <div>
      <h2 className='text-xl font-medium pb-4 flex'>Results containing:<p className='font-bold ml-1'>{searchValue}</p> </h2>
      {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>An Error occurred</p>
    ) : data ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item: IMDBMovie) => (
          <MovieCard key={item.imdbID} movie={item} />
        ))}
      </div>
    ) : (
      <p>No data available</p>
    )}
    </div>
  );
};

export default MovieList;