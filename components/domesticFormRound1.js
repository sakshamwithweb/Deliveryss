import { useEffect, useState } from "react";
import ProgressTracker from "./progressTracker";
import SubDomesticDeliverFormRound1 from "./subDomesticDeliverFormRound1";
import SubDomesticPickupFormRound1 from "./subDomesticPickupFormRound1";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DomesticFormRound1 = ({
  selectedSuggestDeliverPinCodeDomestic,
  selectedSuggestPickupPinCodeDomestic,
  selectedSuggestDeliverStateDomestic,
  selectedSuggestPickupCityDomestic,
  selectedSuggestPickupStateDomestic,
  selectedSuggestDeliverCityDomestic,
  setSelectedComponent,
  setRound1Data,
}) => {
  const [pickupAddressWrite, setPickupAddressWrite] = useState(false);
  const [deliverAddressWrite, setDeliverAddressWrite] = useState(false);
  const [pickupContactName, setPickupContactName] = useState("");
  const [pickupMobileNo, setPickupMobileNo] = useState("");
  const [pickupEmail, setPickupEmail] = useState("");
  const [pickupFlatNumber, setPickupFlatNumber] = useState("");
  const [pickupStreet, setPickupStreet] = useState("");

  const [DeliverContactName, setDeliverContactName] = useState("");
  const [DeliverMobileNo, setDeliverMobileNo] = useState("");
  const [DeliverEmail, setDeliverEmail] = useState("");
  const [DeliverFlatNumber, setDeliverFlatNumber] = useState("");
  const [DeliverStreet, setDeliverStreet] = useState("");
  const [pickupFormSubmit, setPickupFormSubmit] = useState(false);
  const [deliverFormSubmit, setDeliverFormSubmit] = useState(false);

  const [allowDelivery, setAllowDelivery] = useState(false);
  const [allowPickup, setAllowPickup] = useState(false);

  const [allowNext, setAllowNext] = useState(false);

  useEffect(() => {
    if (allowDelivery && allowPickup) {
      setAllowNext(true);
    } else {
      setAllowDelivery(false);
    }
  }, [allowDelivery, allowPickup]);

  useEffect(() => {
    if (pickupFormSubmit) {
      setAllowPickup(true);
    }
  }, [pickupFormSubmit]);

  useEffect(() => {
    if (deliverFormSubmit) {
      setAllowDelivery(true);
    }
  }, [deliverFormSubmit, pickupFormSubmit]);

  const arrowIcon = (
    <svg
      className="w-4 h-4 cursor-pointer text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  );

  const closeIcon = (
    <svg
      className="w-6 h-6 cursor-pointer text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  );

  return (
    <div className="flex flex-col relative justify-center items-center h-[80vh]">
      <div className="absolute top-[-30px] flex flex-col w-full justify-center h-[15%] items-center">
        <ProgressTracker currentStep={0} totalSteps={4} />
        <div className="w-full bg-black h-[1px] mt-3"></div>
      </div>
      <div className="flex justify-center items-center gap-5 h-[80%] w-full">
        <div className="bg-white rounded-md px-5 shadow-lg h-[50vh]">
          <h1 className="text-2xl font-bold h-[40px] text-left mt-5 w-[40vw]">
            Address Details
          </h1>
          <div className="w-full bg-black h-[0.5px] mt-1"></div>
          <div className="mt-3">
            <div
              onClick={() => {
                if (!allowPickup) {
                  setPickupAddressWrite(true);
                }
              }}
              className="flex items-center border border-black w-[35vw] mt-3 rounded-lg p-4 h-[8vh] overflow-hidden cursor-text"
            >
              <span className="text-gray-500 flex-1">
                {allowPickup ? (
                  <>
                    {pickupFlatNumber} {pickupStreet}{" "}
                    {selectedSuggestPickupCityDomestic}{" "}
                    {selectedSuggestPickupStateDomestic} {"-"}{" "}
                    {selectedSuggestPickupPinCodeDomestic}{" "}
                  </>
                ) : (
                  <>Pickup address</>
                )}
              </span>
              {arrowIcon}
            </div>
            <div
              onClick={() => {
                if (!allowDelivery) {
                  setDeliverAddressWrite(true);
                }
              }}
              className="flex items-center border border-black w-[35vw] mt-3 rounded-lg p-4 h-[8vh] overflow-hidden cursor-text"
            >
              <span className="text-gray-500 flex-1">
                {allowDelivery ? (
                  <>
                    {DeliverFlatNumber} {DeliverStreet}{" "}
                    {selectedSuggestDeliverCityDomestic}{" "}
                    {selectedSuggestDeliverStateDomestic} {"-"}{" "}
                    {selectedSuggestDeliverPinCodeDomestic}{" "}
                  </>
                ) : (
                  <>Deliver address</>
                )}
              </span>
              {allowDelivery ? <></> : arrowIcon}
            </div>
          </div>
          <button
            disabled={!allowNext}
            onClick={() => {
              if (
                DeliverStreet.length !== 0 &&
                DeliverFlatNumber.length !== 0 &&
                DeliverEmail.length !== 0 &&
                DeliverMobileNo.length !== 0 &&
                DeliverContactName.length !== 0 &&
                pickupStreet.length !== 0 &&
                pickupFlatNumber.length !== 0 &&
                pickupEmail.length !== 0 &&
                pickupMobileNo.length !== 0 &&
                pickupContactName.length !== 0 &&
                selectedSuggestDeliverStateDomestic.length !== 0 &&
                selectedSuggestPickupCityDomestic.length !== 0 &&
                selectedSuggestPickupStateDomestic.length !== 0 &&
                selectedSuggestDeliverCityDomestic.length !== 0 &&
                selectedSuggestDeliverPinCodeDomestic.length !== 0 &&
                selectedSuggestPickupPinCodeDomestic.length !== 0
              ) {
                setRound1Data({
                  selectedSuggestPickupPinCodeDomestic,
                  selectedSuggestDeliverPinCodeDomestic,
                  selectedSuggestDeliverCityDomestic,
                  selectedSuggestPickupStateDomestic,
                  selectedSuggestPickupCityDomestic,
                  selectedSuggestDeliverStateDomestic,
                  pickupMobileNo,
                  pickupContactName,
                  pickupEmail,
                  pickupFlatNumber,
                  pickupStreet,
                  DeliverContactName,
                  DeliverMobileNo,
                  DeliverEmail,
                  DeliverFlatNumber,
                  DeliverStreet,
                });
                setSelectedComponent(2);
              } else {
                toast.error("Something went wrong. Reload...");
              }
            }}
            className={`p-4 ${
              allowNext
                ? "bg-blue-500 hover:bg-blue-600 transition duration-300"
                : "bg-blue-200"
            }  m-4 text-white font-bold rounded-3xl px-10  h-[8vh]`}
          >
            Next
          </button>
        </div>
        <div className="bg-white rounded-md w-[25vw] p-5 shadow-lg h-[50vh]">
          <h1 className="text-xl font-semibold">Things to keep in mind</h1>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Ensure addresses are correct and complete.</li>
            <li>Double-check for any special instructions.</li>
            <li>
              Make sure the contact information is up-to-date and available.
            </li>
          </ul>
        </div>
      </div>

      {pickupAddressWrite && (
        <SubDomesticPickupFormRound1
          selectedSuggestPickupCityDomestic={selectedSuggestPickupCityDomestic}
          selectedSuggestPickupStateDomestic={
            selectedSuggestPickupStateDomestic
          }
          selectedSuggestPickupPinCodeDomestic={
            selectedSuggestPickupPinCodeDomestic
          }
          setPickupAddressWrite={setPickupAddressWrite}
          closeIcon={closeIcon}
          setPickupContactName={setPickupContactName}
          setPickupEmail={setPickupEmail}
          setPickupFlatNumber={setPickupFlatNumber}
          setPickupMobileNo={setPickupMobileNo}
          setPickupStreet={setPickupStreet}
          setPickupFormSubmit={setPickupFormSubmit}
        />
      )}

      {deliverAddressWrite && (
        <SubDomesticDeliverFormRound1
          selectedSuggestDeliverStateDomestic={
            selectedSuggestDeliverStateDomestic
          }
          selectedSuggestDeliverCityDomestic={
            selectedSuggestDeliverCityDomestic
          }
          selectedSuggestDeliverPinCodeDomestic={
            selectedSuggestDeliverPinCodeDomestic
          }
          setDeliverAddressWrite={setDeliverAddressWrite}
          closeIcon={closeIcon}
          setDeliverContactName={setDeliverContactName}
          setDeliverEmail={setDeliverEmail}
          setDeliverFlatNumber={setDeliverFlatNumber}
          setDeliverMobileNo={setDeliverMobileNo}
          setDeliverStreet={setDeliverStreet}
          setDeliverFormSubmit={setDeliverFormSubmit}
        />
      )}
    </div>
  );
};

export default DomesticFormRound1;
