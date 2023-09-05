import { Link, Routes, Route } from 'react-router-dom';
import MovieCard from './components/MovieCard';
import Search from './components/Search';
import MovieList from './components/MovieList';
import Favorites from './routes/Favorites';
import { useState } from 'react';
import Detail from './routes/Detail';
import Edit from './routes/Edit';

const App = () => {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="min-h-full">
      <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
            <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
              <div className="flex-shrink-0 flex items-center">
                <a href="#">MovieDB</a>
              </div>
            </div>
            <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                <Search
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
            <nav
              aria-label="Sidebar"
              className="sticky top-4 divide-y divide-gray-300"
            >
              <div className="flex flex-col pb-8 space-y-1">
                {/* navigation */}
                <Link className="bg-gray-200 p-3 rounded" to='/'>Home</Link>
                <Link className="bg-gray-200 p-3 rounded" to='/favorites'>Favorite</Link>
              </div>
            </nav>
          </div>
          <main className="lg:col-span-9">{/* routing */}
          <Routes>
            <Route path='/' element={<MovieList searchValue={searchValue} />}/>
            <Route path='/favorites' element={<Favorites />}/>
            <Route path='/movies/:imdbID' element={<Detail />}/>
            <Route path='/favorites/edit/:imdbID' element={<Edit />}/>
          </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
