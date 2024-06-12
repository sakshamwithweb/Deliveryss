import React, { useState } from "react";
import { toast } from "react-toastify";

const AddVerification = ({
  setAddVerification,
  setAddVerificationData,
  setAddVerificationFilled,
}) => {
  const [selectedIdProof, setSelectedIdProof] = useState("aadhaar");
  const [input, setInput] = useState("");
  const allowAadhar = input.length == 12;
  const allowLicense = input.length == 16;

  const closeIcon = (
    <svg
      className="w-6 h-6 cursor-pointer text-gray-500 absolute top-2 right-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setAddVerification(false)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );

  const handleIdProofSelection = (idProof) => {
    setInput("");
    setSelectedIdProof(idProof);
  };

  const handleSubmit = () => {
    try {
      setAddVerificationFilled(true);
      setAddVerificationData({ Document: selectedIdProof, Id: input });
      setAddVerification(false);
    } catch (error) {
      toast.error("Something went wrong. Try again..")
    }

    console.log({ Document: selectedIdProof, Id: input });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg relative h-[52vh] w-[50vw]">
        <div>{closeIcon}</div>
        <div className="heading top-3 absolute left-3">
          <h1 className="text-xl font-bold">Add Verification Details</h1>
        </div>
        <div className="mt-7 line bg-gray-400 h-[1px]"></div>
        <div className="mt-6">
          <p className="text-lg font-semibold">Select Your ID Proof</p>
          <ul className="mt-2 rounded-lg inline-flex border border-black">
            <li
              className={`cursor-pointer px-4 py-2 font-bold transition-colors rounded-tl-lg rounded-bl-lg ${
                selectedIdProof === "aadhaar"
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 hover:bg-black hover:text-white"
              }`}
              onClick={() => handleIdProofSelection("aadhaar")}
              style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              Aadhaar
            </li>
            <li
              className={`cursor-pointer px-4 py-2 font-bold transition-colors rounded-br-lg rounded-tr-lg ${
                selectedIdProof === "drivingLicense"
                  ? "bg-black text-white"
                  : "bg-white text-gray-800 hover:bg-black hover:text-white"
              }`}
              onClick={() => handleIdProofSelection("drivingLicense")}
              style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              Driving License
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <label htmlFor="idNumber" className="block text-lg font-semibold">
            {selectedIdProof === "drivingLicense"
              ? "Driving License No."
              : "Aadhaar Number"}
          </label>
          <input
            type="text"
            maxLength={selectedIdProof === "drivingLicense" ? "16" : "12"}
            id="idNumber"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="mt-1 px-3 py-2 w-full border  rounded-md"
            placeholder={
              selectedIdProof === "drivingLicense"
                ? "Enter Driving License No."
                : "Enter Aadhaar Number"
            }
          />
        </div>
        <div className="mt-6">
          <button
            disabled={
              selectedIdProof === "drivingLicense"
                ? !allowLicense
                : !allowAadhar
            }
            onClick={() => {
              handleSubmit();
            }}
            className={`px-4 py-2 ${
              selectedIdProof === "drivingLicense"
                ? allowLicense
                  ? "bg-black"
                  : "bg-gray-400"
                : allowAadhar
                ? "bg-black"
                : "bg-gray-400"
            } font-bold text-white`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVerification;
