import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChoosePackageSize = ({ handleNextCard,setProfit, distance, weightRanges }) => {
  const [selectedLabel, setSelectedLabel] = useState("");
  const [itemId, setItemId] = useState();

  useEffect(() => {
    if (distance != null && itemId != null) {
      const confirmRange = weightRanges.find((range) => range.id === itemId);
      console.log("confirmRange", confirmRange);

      if (confirmRange) {
        const basePrice = distance / 400;
        const calculatedPrice = basePrice * confirmRange.factor;
        const roundedPrice = Math.round(calculatedPrice * 100) / 100;
        setProfit(roundedPrice)
      }
    }
  }, [distance, itemId]);

  const items = [
    {
      id: 1,
      label: "1-50 GM",
      sizeLabel: "XS",
    },
    {
      id: 2,
      label: "50-200 GM",
      sizeLabel: "S",
    },
    {
      id: 3,
      label: "200-500 GM",
      sizeLabel: "M",
    },
    {
      id: 4,
      label: "0.5-1 KG",
      sizeLabel: "L",
    },
    {
      id: 5,
      label: "1-2 KG",
      sizeLabel: "XL",
    },
    {
      id: 6,
      label: "2-5 KG",
      sizeLabel: "XXL",
    },
    {
      id: 7,
      label: "5-25 KG",
      sizeLabel: "XXXL",
    },
    {
      id: 8,
      label: "25-50 KG",
      sizeLabel: "XXXXL",
    },
  ];

  const handleItemClick = (item) => {
    setSelectedLabel(selectedLabel === item.label ? "" : item.label);
    setItemId(item.id);
  };

  const handleSubmit = () => {
    if (selectedLabel.length !== 0) {
      handleNextCard(selectedLabel);
    } else {
      toast.error("At least select one");
    }
  };

  return (
    <div className="card">
      <div className="card-header p-4 flex items-center border-b border-gray-200">
        <div className="flex justify-between items-center flex-grow">
          <h3 className="text-base md:text-xl leading-6 font-600 text-gray-900">
            Choose package size
          </h3>
        </div>
      </div>
      <div className="card-body rounded-lg">
        <div className="text-center p-4">
          <div className="package-type-wrapper grid grid-cols-2 gap-6 items-center justify-center">
            {items.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleItemClick(item)}
                className={`flex cursor-pointer ui-element-shadow-form rounded-lg border border-light-700 pl-5 pr-3 py-2 text-left text-font-default-black h-10 items-center text-start ${
                  selectedLabel === item.label ? "bg-gray-400" : ""
                }`}
              >
                <div className="ml-4 text-[11px] sm:text-xs leading-4 font-semibold uppercase">
                  {item.sizeLabel}
                </div>
                <div className="ml-4 text-[11px] sm:text-xs leading-4 font-semibold uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center p-4 bg-background-and-outline-section-and-outline next-step">
          <button
            onClick={handleSubmit}
            type="button"
            className="bg-blue-500 px-4 py-2 rounded-md text-white"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoosePackageSize;
