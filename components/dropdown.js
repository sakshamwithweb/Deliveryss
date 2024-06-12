import { useState } from "react";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative z-20"
    >
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex min-w-[150px] items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 border border-black dark:focus:ring-gray-700 dark:text-white"
        type="button"
      >
        <span className="sr-only"></span>
        <img
          className="w-8 h-8 me-2 rounded-full"
          src={props.pic}
          alt="user photo"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        />
        <div
          className="text-black whitespace-nowrap overflow-hidden text-ellipsis"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          {props.name}
        </div>
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

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdownAvatarName"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow max-w-full w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-full left-0 right-0 mt-0.5 mx-auto overflow-x-auto"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="truncate">{props.email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownAvatarNameButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <li
              onClick={()=>{localStorage.removeItem("email");window.location.reload();}}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
