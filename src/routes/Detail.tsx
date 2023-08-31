import { FunctionComponent, useState, useEffect } from 'react';
import Toggle from '../components/Toggle';
import { useParams } from 'react-router-dom';
import { IMDBMovie } from '../model/movie';

type Props = {
  movieDetail: IMDBMovie;
}

const Detail: FunctionComponent = (movieDetail) => {
  const [movie, setMovie] = useState<IMDBMovie | null>(null);
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`http://www.omdbapi.com/?apikey=1a993ee0&i=tt1285016`);
      console.log(result); // Log the response object
      const data = await result.json();
  
      console.log(data); // Log the data
  
      setMovie(data);
    };
    getMovie();
  }, [params.imdbID]);

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img className="w-full h-full object-center object-cover sm:rounded-lg" src={movie?.Poster}
/>
            </div>
          </div>
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <Toggle />
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {movie?.Title}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-gray-900">{movie?.Year}</p>
            </div>
            <div className="mt-3">
              <p className="text-xl text-gray-900">{movie?.Actors}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{movie?.Plot}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between">{/* link back */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};  

export default Detail;