export const DropdownAtom = ({ label, options, onClick, ...props }) => {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black bg-gold hover:bg-gold focus:ring-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-white dark:hover:bg-white dark:focus:ring-black"
        type="button"
        onClick={() => {
          // Toggle dropdown visibility here
          console.log("Dropdown toggled");
        }}
      >
        {label}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gold dark:hover:bg-gray-600 dark:hover:text-gold"
                onClick={(e) => {
                  e.preventDefault();
                  onSignOutClick(option);
                }}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
