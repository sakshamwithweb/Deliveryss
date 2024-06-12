import React, { useEffect, useState } from "react";
import ProgressTracker from "./progressTracker";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DomesticFormRound3 = ({
  distance,
  setSelectedComponent,
  setRound3Data,
}) => {
  const [delay3Dates, setDelay3Dates] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);


  useEffect(() => {
    const calculateDates = (delay) => {
      const newDate = new Date();
      newDate.setDate(newDate.getDate() + delay);
  
      const dates = [];
      for (let i = 0; i < 3; i++) {
        const currentDate = new Date(newDate);
        currentDate.setDate(currentDate.getDate() + i);
        const date = {
          day: currentDate.toLocaleString("default", { weekday: "long" }),
          date: currentDate.getDate(),
          month: currentDate.toLocaleString("default", { month: "long" }),
        };
        dates.push(date);
      }
  
      return dates;
    };
  
    const Distance = Math.floor(distance);
    if (Distance > 0) {
      let dates;
      if (Distance >= 3000) {
        dates = calculateDates(8);
      } else if (Distance >= 1000) {
        dates = calculateDates(5);
      } else if (Distance >= 500) {
        dates = calculateDates(3);
      } else if (Distance >= 100) {
        dates = calculateDates(1);
      } else if (Distance >= 50) {
        dates = calculateDates(0);
      }
      setDelay3Dates(dates);
    }
  }, [distance]);

  const dateDecide = (delay) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + delay);

    const dates = [];
    for (let i = 0; i < 3; i++) {
      const currentDate = new Date(newDate);
      currentDate.setDate(currentDate.getDate() + i);
      const date = {
        date: currentDate.getDate(),
        month: currentDate.toLocaleString("default", { month: "long" }),
        year: currentDate.getFullYear(),
        day: currentDate.toLocaleString("default", { weekday: "long" }),
      };
      dates.push(date);
    }

    setDelay3Dates(dates);
  };

  const handleSubmit = () => {
    if (selectedIndex !== null) {
      setRound3Data(delay3Dates[selectedIndex]);
      setSelectedComponent(4);
    } else {
      toast.error("Select one..");
    }
  };

  return (
    <div className="flex flex-col relative justify-center items-center min-h-[80vh]">
     
      <div className="absolute top-[-30px] flex flex-col w-full justify-center h-[15%] items-center">
        <ProgressTracker currentStep={2} totalSteps={4} />
        <div className="w-full bg-black h-[1px] mt-3"></div>
      </div>
      <div className="w-[60vw] h-[60vh] flex flex-col justify-center items-center bg-gray-50 relative">
        <h1 className="absolute top-3 text-2xl font-bold">
          Select Schedule Delivery Date
        </h1>
        <div className="flex">
          {delay3Dates.map((date, index) => (
            <div
              onClick={() => setSelectedIndex(index)}
              className={`flex flex-col text-center justify-between rounded-full h-[20vh] m-10 px-9 py-3 border ${
                selectedIndex === index
                  ? "bg-gray-100 border-gray-500"
                  : "bg-white border-gray-300"
              }`}
              key={index}
            >
              <div>{date.day.slice(0, 3).toUpperCase()}</div>
              <div className="my-2">{date.date}</div>
              <div>{date.month.slice(0, 3).toUpperCase()}</div>
            </div>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 mt-10 px-4 py-2 rounded-md text-white"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default DomesticFormRound3;
