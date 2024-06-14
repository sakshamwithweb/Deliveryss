import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChoosePackageName = ({ handleNextCard }) => {
  const [otherInput, setOtherInput] = useState("");

  const handleOtherInputChange = (event) => {
    setOtherInput(event.target.value);
  };

  const handleSubmit = () => {
    if (otherInput.trim().length !== 0) {
      handleNextCard(otherInput);
    } else {
      toast.error("Write name of product first");
    }
  };

  return (
    <div className="w-[80vw] h-[60vh] flex flex-col justify-center items-center rounded-lg shadow-md p-4">
      <h3 className="text-2xl font-bold text-black mb-10">Name Your Package</h3>
      <div className="flex flex-col items-center">
        <input
          className="p-4 rounded-lg border border-gray-400 mb-10 w-[25vw] max-w-md focus:outline-none focus:border-blue-500"
          type="text"
          required
          placeholder="Write name of your package"
          value={otherInput}
          onChange={handleOtherInputChange}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-4 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChoosePackageName;
