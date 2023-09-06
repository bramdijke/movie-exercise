import React, { FunctionComponent, useState, useEffect } from 'react';
import { IMDBMovie } from '../model/movie';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const params = useParams<{ imdbID: string }>();
  const [editMovie, setEditMovie] = useState<IMDBMovie | null>(null);
  const [title, setTitle] = useState<string | undefined>(editMovie?.Title);
  const [year, setYear] = useState<string | undefined>(editMovie?.Year);
  const [actors, setActors] = useState<string | undefined>(editMovie?.Actors);

  useEffect(() => {
    const getMovie = async () => {
      const result = await fetch(`http://www.omdbapi.com/?apikey=1a993ee0&i=${params.imdbID}`);
      const data = await result.json();    

      setEditMovie(data);
      setTitle(data.Title);
      setYear(data.Year);
      setActors(data.Actors);

      console.log(data)
    }
    getMovie();
  }, [params.imdbID])

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img className="w-full h-full object-center object-cover sm:rounded-lg" src={editMovie?.Poster}/>
            </div>
          </div>
          <form>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    name="Title"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    name="Year"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    name="Actors"
                    type="text"
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                    value={actors}
                    onChange={(event) => setActors(event.target.value)}
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
