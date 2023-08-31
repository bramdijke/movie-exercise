import { FunctionComponent } from 'react';

type ToggleProps = {
  isFavorite: boolean;
  onToggle: () => void;
};

const Toggle: FunctionComponent<ToggleProps> = ({ isFavorite, onToggle }) => {
  return (
    <div className="flex flex-row-reverse">
      <button
        type="button"
        className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          isFavorite ? 'bg-green-600' : 'border-gray-200'
        }`}
        role="switch"
        aria-checked={isFavorite}
        onClick={onToggle}
      >
        <span
          aria-hidden="true"
          className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
            isFavorite ? 'translate-x-5 ' : 'translate-x-0'
          }`}
        ></span>
      </button>
      <b>Favorite:</b>
    </div>
  );
};

export default Toggle;