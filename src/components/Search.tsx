import { FunctionComponent } from 'react';
import { Route, useLocation } from 'react-router-dom';

type Props = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ searchValue, setSearchValue }: Props) => {
  const location = useLocation();
  const isSearchEnabled = location.pathname === '/';  

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event);
    setSearchValue(event.target.value)
  }
  
  return (
    <div className="w-full">
      <label className="sr-only">{}</label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-rose-500 focus:border-rose-500 sm:text-sm disabled:bg-gray-200 disabled: text-gray-500"
          placeholder="Search"
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          disabled={!isSearchEnabled} // Enable or disable based on the route
          />
      </div>
    </div>
  );
};

export default Search;
