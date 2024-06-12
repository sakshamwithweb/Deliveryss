import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProgressTracker from "./progressTracker";
import { FaMapMarkerAlt } from "react-icons/fa";
import AddVerification from "./addVerification";

const DomesticFormRound4 = ({
  round1Data,
  setRound4Data,
  round2Data,
  round3Data,
  setSelectedComponent,
}) => {
  const [addVerification, setAddVerification] = useState(false);
  const [addVerificationData, setAddVerificationData] = useState({});
  const [addVerificationFilled, setAddVerificationFilled] = useState(false);

  const handleProced = () => {
    if (addVerificationFilled) {
      setRound4Data(addVerificationData)
      setSelectedComponent(5);
    } else {
      toast.error("Firstly Add Verification Document");
    }
  };

  return (
    <div className="flex flex-col relative justify-center items-center min-h-[80vh]">
      <div className="absolute top-[-30px] flex flex-col w-full justify-center h-[15%] items-center">
        <ProgressTracker currentStep={3} totalSteps={4} />
        <div className="w-full h-[1px] mt-3"></div>
      </div>
      <div className="body flex gap-5 w-[75vw] min-h-[68vh] justify-center items-center">
        <div className="lefty w-[43vw] h-[70vh] overflow-y-auto rounded-lg flex flex-col bg-white shadow-lg">
          <div className="head p-4">
            <h1 className="text-xl font-bold">Summary Details</h1>
          </div>
          <div className="line w-full h-[1px] bg-gray-300"></div>
          <div className="addr-details p-3">
            <div className="addr-head text-sm font-bold">Address Details</div>
            <div className="addr-track flex flex-col items-start mt-3">
              <div className="flex items-center gap-2">
                <div className="circle bg-gray-400 h-4 w-4 rounded-full"></div>
                <span className="text-sm font-medium">
                  {round1Data.selectedSuggestPickupPinCodeDomestic}{" "}
                  {round1Data.selectedSuggestPickupCityDomestic}{" "}
                  {round1Data.selectedSuggestPickupStateDomestic}
                </span>
              </div>
              <div className="line w-[1px] bg-gray-400 h-8 my-1 ml-2"></div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400 h-4 w-4" />
                <span className="text-sm font-medium">
                  {round1Data.selectedSuggestDeliverPinCodeDomestic}{" "}
                  {round1Data.selectedSuggestDeliverCityDomestic}{" "}
                  {round1Data.selectedSuggestDeliverStateDomestic}
                </span>
              </div>
            </div>
          </div>
          <div className="line w-full h-[6px] bg-gray-200"></div>
          <div className="package-details p-3">
            <div className="package-head text-sm font-bold">
              Package Details
            </div>
            <div className="package-type mt-2">
              Package Type: {round2Data.describePackageContent}
            </div>
            <div className="package-size mt-2">
              Package Size: {round2Data.packageSize}
            </div>
            <div className="package-value mt-2">
              Package Value: ${round2Data.deliveryPrice}
            </div>
            <div className="package-secure mt-2">Secure: Yes</div>
          </div>
          <div className="line w-full h-[6px] bg-gray-200"></div>
          <div className="pickup-schedule p-3">
            <div className="pickup-head text-sm font-bold">Pickup Schedule</div>
            <div className="pickup-date mt-2">Pickup-Date: Today</div>
            <div className="delivered-date mt-2">
              Delivered-Date: {round3Data.date} {round3Data.month}{" "}
              {round3Data.year}
            </div>
            <div className="pickup-time-slot mt-2">
              Time Slot: 09:00 AM - 09:00 PM
            </div>
          </div>
          <div className="line w-full h-[6px] bg-gray-200"></div>
          <div className="verification-details p-3">
            <div className="verificationDetails-head text-sm font-bold">
              Verification Details
            </div>
            <div className="verificationDetails-type mt-2">
              Type: {addVerificationFilled ? addVerificationData.Document : "-"}
            </div>
            <div className="verificationDetails-number mt-2">
              Number: {addVerificationFilled ? addVerificationData.Id : "-"}
            </div>
          </div>
        </div>
        <div className="right w-[30vw] flex flex-col bg-white rounded-lg shadow-lg gap-10 p-4">
          <div className="add-verification flex flex-col justify-center items-center mb-4">
            <h1 className="text-xl font-bold mb-7">Add Verification details</h1>
            {addVerificationFilled ? (
              <>Added</>
            ) : (
              <>
                <button
                  onClick={() => {
                    setAddVerification(true);
                  }}
                  className="w-[25vw] h-[4vh] rounded-sm font-bold text-white bg-black "
                >
                  Add
                </button>
              </>
            )}
          </div>
          <button
            onClick={handleProced}
            className="p-2 bg-black text-white text-md font-bold"
          >
            Proceed
          </button>
        </div>
      </div>
      {addVerification && (
        <AddVerification
          setRound4Data={setRound4Data}
          setAddVerificationData={setAddVerificationData}
          setAddVerificationFilled={setAddVerificationFilled}
          setAddVerification={setAddVerification}
        />
      )}
    </div>
  );
};

export default DomesticFormRound4;
