import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChoosePackageSize from "./ChoosePackageSize";
import DelhiveryProtectAPrice from "./DeliveryProtect";
import DescribePackageContent from "./DescribePackageContent";
import DescribeYourPackage from "./DescribeYourPackage";
import ChoosePackageName from "./choosePackageName";

const CardList = ({ setSelectedComponent,distance,setProfit, setRound2Data,weightRanges }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [describePackageContent, setDescribePackageContent] = useState("");
  const [describeYourPackage, setDescribeYourPackage] = useState("");
  const [packageSize, setPackageSize] = useState("");
  const [deliveryPrice, setdeliveryPrice] = useState("")
  const [insurancePrice, setInsurancePrice] = useState("")
  const [packageName, setPackageName] = useState("")


  const handleNextCard = (selectedLabel) => {
    if (activeCardIndex === 0) {
      setDescribePackageContent(selectedLabel);
      setActiveCardIndex((prevIndex) => prevIndex + 1);
    } else if (activeCardIndex === 1) {
      setDescribeYourPackage(selectedLabel);
      setActiveCardIndex((prevIndex) => prevIndex + 1);
    } else if (activeCardIndex === 2) {
      setPackageSize(selectedLabel);
      setActiveCardIndex((prevIndex) => prevIndex + 1);
    } else if (activeCardIndex === 3) {
      setPackageName(selectedLabel);
      setActiveCardIndex((prevIndex) => prevIndex + 1);
    } else if (activeCardIndex === 4) {
      if (
        describePackageContent.length !== 0 &&
        describeYourPackage.length !== 0 &&
        packageSize.length !== 0 &&
        deliveryPrice.length !== 0 &&
        insurancePrice.length !== 0 &&
        packageName.length !== 0
      ) {
        setRound2Data({
          describePackageContent,
          describeYourPackage,
          packageSize,
          packageName,
          deliveryPrice: parseInt(deliveryPrice),
          insurancePrice:parseInt(insurancePrice)
        });
        setSelectedComponent(3);
      } else {
        toast.error("Something went wrong. Reload...");
        
      }
    }
  };

  return (
    <div className="overflow-auto max-h-[60vh]">
      {activeCardIndex === 0 && (
        <DescribePackageContent handleNextCard={handleNextCard} />
      )}
      {activeCardIndex === 1 && (
        <DescribeYourPackage handleNextCard={handleNextCard} />
      )}
      {activeCardIndex === 2 && (
        <ChoosePackageSize setProfit={setProfit} handleNextCard={handleNextCard} weightRanges={weightRanges} distance={distance} />
      )}
      {activeCardIndex === 3 && (
        <ChoosePackageName handleNextCard={handleNextCard} />
      )}
      {activeCardIndex === 4 && (
        <DelhiveryProtectAPrice
          setdeliveryPrice={setdeliveryPrice}
          handleNextCard={handleNextCard}
          deliveryPrice={deliveryPrice}
          setInsurancePrice={setInsurancePrice}
        />
      )}
    </div>
  );
};

export default CardList;
