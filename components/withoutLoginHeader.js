import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [touch, setTouch] = useState(true);

  const handleClick = () => {
    setTouch(!touch);
  };

  return (
    <>
      <nav className="h-[8vh] bg-slate-200 flex justify-between items-center">
        {touch ? (
          <>
            <div
              onClick={handleClick}
              className="logo mx-7 h-[80%] text-center text-xl font-bold flex items-center text-gray-800 bg-yellow-500 rounded-full p-3 cursor-pointer"
              style={{ userSelect: "none" }}
            >
              Delivery
            </div>
            <ul
              className={`flex mx-7 ${
                touch ? "slide-out-left" : "slide-in-right"
              }`}
            >
              <Link href="/">
                <li className="header-h1">Home</li>
              </Link>
              <Link href="/#promote">
                <li className="header-h1">About</li>
              </Link>
              <Link href="/backtohome">
                <li className="header-h1">Login</li>
              </Link>
            </ul>
          </>
        ) : (
          <>
            <ul
              className={`flex mx-7 ${
                touch ? "slide-in-left" : "slide-out-right"
              }`}
            >
              <Link href="/">
                <li className="header-h1">Home</li>
              </Link>
              <Link href="/#promote">
                <li className="header-h1">About</li>
              </Link>
              <Link href="/backtohome">
                <li className="header-h1">Login</li>
              </Link>
            </ul>
            <div
              onClick={handleClick}
              className="mx-7 h-[80%] text-center text-xl font-bold flex items-center text-gray-800 bg-yellow-500 rounded-full p-3 cursor-pointer"
              style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              Delivery
            </div>
          </>
        )}
      </nav>
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes slideOutRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.5s ease;
        }

        .slide-out-left {
          animation: slideOutLeft 0.5s ease;
        }

        .slide-in-right {
          animation: slideInRight 0.5s ease;
        }

        .slide-out-right {
          animation: slideOutRight 0.5s ease;
        }
      `}</style>
    </>
  );
};

export default Header;
