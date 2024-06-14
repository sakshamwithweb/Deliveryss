import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const DelhiveryProtectAPrice = ({
  handleNextCard,
  setdeliveryPrice,
  deliveryPrice,
  setInsurancePrice
}) => {
  const [packageValue, setPackageValue] = useState("");
  const [insuranceCost, setInsuranceCost] = useState(0);

  const handlePackageValueChange = (event) => {
    const newValue = event.target.value;
    setPackageValue(newValue);
    calculateInsuranceCost(newValue);
  };

  const calculateInsuranceCost = (value) => {
    const numericValue = parseInt(value);
    if (numericValue && numericValue > 0) {
      if (numericValue <= 100) {
        setInsuranceCost(3);
      } else if (numericValue <= 500) {
        setInsuranceCost(6);
      } else if (numericValue <= 700) {
        setInsuranceCost(9);
      } else if (numericValue <= 1000) {
        setInsuranceCost(15);
      } else if (numericValue <= 3000) {
        setInsuranceCost(20);
      } else {
        toast.error("Package value cannot exceed $150,000.");
        setInsuranceCost(0);
      }
    } else {
      setInsuranceCost(0);
    }
  };

  const handleProceed = () => {
    if (insuranceCost !== 0) {
      setdeliveryPrice(packageValue); 
      setInsurancePrice(insuranceCost)
      //if addapt insurance fee so do here.....
    }
  };
  useEffect(() => {
    if (deliveryPrice.length !== 0) {
      handleNextCard(packageValue);
    }
  }, [deliveryPrice]);

  return (
    <div className="card border-2 border-gray-300 rounded-lg overflow-hidden shadow-lg">
      <div className="card-header p-4 bg-gray-100 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900">
          Delhivery Protect & Price
        </h3>
        <img
          src="https://www.delhivery.com/direct/app/assets/delhivery-protect.3ab05a37.png"
          alt="Delhivery Protect"
          className="w-16 h-auto"
        />
      </div>
      <div className="card-body p-4">
        <div className="package-details text-left">
          <label
            htmlFor="packageValue"
            className="block font-semibold mb-2 text-gray-800"
          >
            Enter Package Value ($):
          </label>
          <input
            type="number"
            id="packageValue"
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={packageValue}
            onChange={handlePackageValueChange}
            placeholder="Enter package value"
            min="0"
          />
          {insuranceCost > 0 && (
            <p className="text-lg font-semibold mt-4 text-gray-800">
              Insurance Cost: ${insuranceCost}
            </p>
          )}
          <p className="text-sm text-gray-600 mt-2">
            Claim up to ${packageValue} in case of loss or damage
          </p>
        </div>
      </div>
      <div className="card-footer bg-gray-100 border-t border-gray-200 p-4 flex justify-end">
        <button
          onClick={handleProceed}
          type="button"
          className={`bg-blue-500 px-6 py-3 rounded-md text-white font-semibold ${
            insuranceCost === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={insuranceCost === 0}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default DelhiveryProtectAPrice;
