import { FunctionComponent, useState, useEffect, useContext } from 'react';
import Toggle from '../components/Toggle';
import { useParams, Link } from 'react-router-dom';
import { IMDBMovie } from '../model/movie';
import Favorites from './Favorites';
import ReviewForm from '../components/ReviewForm';
import Reviews from '../components/Reviews';
import { FavoritesContext } from '../context/FavoritesContext';
import { useQuery } from 'react-query';

const Detail: FunctionComponent = () => {
  const [movie, setMovie] = useState<IMDBMovie | null>(null);
  const params = useParams<{ imdbID: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  const { favoriteMovies, createFavoriteMovie, deleteFavoriteMovie } = useContext(FavoritesContext);  
  const { data, isLoading, isError } = useQuery('movie', async () => {
    const result = await fetch(`http://www.omdbapi.com/?apikey=1a993ee0&i=${params.imdbID}`);
    const data = await result.json();
    return data;
  });

  const checkItemInArray = () => {
    const imdbIDs = favoriteMovies?.map((movie: IMDBMovie) => movie.imdbID) || [];
    if (movie && imdbIDs.includes(movie?.imdbID))
      setIsFavorite(true)
    else {
      setIsFavorite(false)
    }
  }

  // useEffect(() => {
  //   const getMovie = async () => {
  //     const result = await fetch(`http://www.omdbapi.com/?apikey=1a993ee0&i=${params.imdbID}`);
  //     const data = await result.json();

  //     setMovie(data);
  //   };
  //   getMovie();
    
  // }, [params.imdbID]);

  useEffect(() => {
    checkItemInArray();
  }, [movie])

  const handleToggle = () => {
    if (isFavorite) {
      if (movie) {
        deleteFavoriteMovie(movie.imdbID);
        setIsFavorite(false);
      }
    } else {
      if (movie) {
        createFavoriteMovie(movie);
        setIsFavorite(true);
      }
    }
  };

  return (
    <div className="bg-white">
      {isLoading && (
        <p>Loading...</p>
      )} 
      
      {!isLoading && isError && (
        <p>Error loading movie data</p>
      )}  
      
      {!isLoading && !isError && data && (
      
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <div>
              <div className="w-full aspect-w-1 aspect-h-1">
                <img className="w-full h-full object-center object-cover sm:rounded-lg" src={data?.Poster} />
              </div>
            </div>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <Toggle isFavorite={isFavorite} onToggle={handleToggle} />
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {data?.Title}
              </h1>
              <div className="mt-3">
                <p className="text-3xl text-gray-900">{data?.Year}</p>
              </div>
              <div className="mt-3">
                <p className="text-xl text-gray-900">{data?.Actors}</p>
              </div>
              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <div className="text-base text-gray-700 space-y-6">
                  <p>{data?.Plot}</p>
                </div>
              </div>
              <Link to={`/`}>
                <div className="mt-8 flex justify-between">
                  <p className="text-gray-500">Back to list</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;