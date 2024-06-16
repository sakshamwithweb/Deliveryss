import React from "react";
import ProgressTracker from "./progressTracker";
import CardList from "./card";

const DomesticFormRound2 = ({ setSelectedComponent,setProfit,distance, setRound2Data,weightRanges }) => {
  return (
    <div className="flex flex-col relative justify-center items-center min-h-[80vh]">
      <div className="absolute top-[-30px] flex flex-col w-full justify-center h-[15%] items-center">
        <ProgressTracker currentStep={1} totalSteps={4} />
        <div className="w-full bg-black h-[1px] mt-3"></div>
      </div>
      <div className="body bg-gray-200 w-[80vw] h-[68vh] flex gap-24 overflow-hidden">
        <div className="card w-[100%] bg-gray-50 rounded-xl overflow-auto">
          <CardList weightRanges={weightRanges} setProfit={setProfit} distance={distance} setSelectedComponent={setSelectedComponent} setRound2Data={setRound2Data}/>
        </div>
      </div>
    </div>
  );
};

export default DomesticFormRound2;
