import { useEffect,useState} from "react";

import Dropdown from "./dropdown";

const WithLoginHeader = (props) => {
  const [touch, setTouch] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(props.name);
  }, [props.name]);

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
              <div className="flex min-h-[8vh] min-w-[35vh] items-center">
                <Dropdown name={name} email={props.email} pic={props.pic}/>
              </div>
            </ul>
          </>
        ) : (
          <>
            <ul
              className={`flex mx-7 ${
                touch ? "slide-in-left" : "slide-out-right"
              }`}
            >
              <div className="flex h-[8vh] w-[35vh] items-center">
              <Dropdown name={name} email={props.email} pic={props.pic} />
              </div>
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
            transform: translateX(-50%);
          }
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
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

export default WithLoginHeader;
