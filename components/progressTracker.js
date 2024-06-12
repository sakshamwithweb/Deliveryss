import React from "react";

const ProgressTracker = ({ currentStep, totalSteps = 4 }) => {
  return (
    <div className="flex justify-between items-center w-full max-w-xl">
      {[...Array(totalSteps)].map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${
              currentStep > index
                ? "bg-green-500 border-green-500 text-white"
                : "bg-gray-200 border-gray-300 text-gray-800"
            }`}
          >
            {currentStep > index ? "✔" : index + 1}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`w-10 h-1 ${
                currentStep > index ? "bg-green-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressTracker;
