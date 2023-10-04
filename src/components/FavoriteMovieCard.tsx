import React, { FunctionComponent } from 'react';
import { IMDBMovie } from '../model/movie';
import { Link } from 'react-router-dom';

type Props = {
  movie: IMDBMovie;
  onDelete: (imdbID: string) => void;
}

const FavoriteMovieCard: FunctionComponent<Props> = ({ movie, onDelete }) => {
  const handleDelete = () => {
    onDelete(movie.imdbID);
  }
//Delete moet ook in context

  return (
    <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="flex-1 flex flex-col">
        <img className="h-48 mx-auto mt-4" src={movie.Poster} alt={movie.Title} />
        <div className="p-4">
          <Link to={`/movies/${movie.imdbID}`}>
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{movie.Title}</h3>
          </Link>
          <dl className="mt-1 flex-grow flex flex-col justify-between">
            <dd className="text-gray-500 text-sm">{movie.Year}</dd>
          </dl>
        </div>
        <div className='flex justify-center gap-5 mb-4'>
          <Link className='cursor-pointer text-orange-500' to={`/favorites/edit/${movie.imdbID}`}>Edit</Link>
          <button className='cursor-pointer text-red-600' onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default FavoriteMovieCard;