import React, { useEffect, useState } from "react";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DescribePackageContent = ({ handleNextCard }) => {
  const [selectedLabel, setSelectedLabel] = useState("");
  const [otherInput, setOtherInput] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);



  const items = [
    {
      id: 1,
      src: "https://www.delhivery.com/direct/app/package-content/books.png",
      label: "BOOKS & DOCUMENTS",
    },
    {
      id: 2,
      src: "https://www.delhivery.com/direct/app/package-content/apparel-accessories.png",
      label: "CLOTHES & PERSONAL ITEMS",
    },
    {
      id: 3,
      src: "https://www.delhivery.com/direct/app/package-content/consumables.png",
      label: "CONSUMABLES",
    },
    {
      id: 4,
      src: "https://www.delhivery.com/direct/app/package-content/electronics.png",
      label: "ELECTRONICS",
    },
    {
      id: 5,
      src: "https://www.delhivery.com/direct/app/package-content/household-items.png",
      label: "HOUSEHOLD ITEMS",
    },
    {
      id: 6,
      src: "https://www.delhivery.com/direct/app/package-content/sports.png",
      label: "SPORTS EQUIPMENT",
    },
    {
      id: 7,
      src: "https://www.delhivery.com/direct/app/package-content/other-package-content.png",
      label: "Other",
    },
  ];

  const handleItemClick = (item) => {
    if (item.id === 7) {
      setShowOtherInput(true);
      setSelectedLabel("");
    } else {
      setShowOtherInput(false);
      setOtherInput("");
      setSelectedLabel(selectedLabel === item.label ? "" : item.label);
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherInput(event.target.value);
    setSelectedLabel(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedLabel || (showOtherInput && otherInput.trim().length !== 0)) {
      if (showOtherInput && otherInput.trim().length === 0) {
        toast.error("If not using input so close");
      } else {
        handleNextCard(selectedLabel);
      }
    } else {
      toast.error("At least select one");
    }
  };

  return (
    <div className="card">
      
      <div className="card-header p-4 flex items-center border-b border-gray-200">
        <div className="flex justify-between items-center flex-grow">
          <h3 className="text-base md:text-xl leading-6 font-600 text-gray-900">
            Describe package content
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
                } ${item.id === 7 && showOtherInput ? "bg-gray-400" : ""}`}
              >
                <img
                  src={item.src}
                  className="inline-block w-full max-w-4 h-full"
                  alt={item.label}
                />
                <div className="ml-4 text-[11px] sm:text-xs leading-4 font-semibold uppercase">
                  {item.label}
                </div>
              </div>
            ))}
            {showOtherInput && (
              <div className="flex flex-col">
                <input
                  className="p-1 rounded-2xl border border-black mb-2"
                  type="text"
                  required
                  placeholder="Write your package"
                  value={otherInput}
                  onChange={handleOtherInputChange}
                />
              </div>
            )}
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

export default DescribePackageContent;
