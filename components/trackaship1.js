import { useEffect, useState } from "react";
import SystemError from "./systemError";
import PriceTellByDistance from "./priceTellByDistance";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Trackaship1 = ({
  userEmail,
  country,
  countryData,
  setCountry,
  pickupPinCodeInternational,
  setPickupPinCodeInternational,
  setDeliverCodeDomestic,
  deliverCodeDomestic,
  setPickupPinCodeDomestic,
  pickupPinCodeDomestic,
  handleGetOtpClickForOrderIdTrack,
  setMobileNo,
  isOrderIdValid,
  mobileNo,
  handleGetOtpClickForMobileInTrack,
  error,
  setActiveTrack,
  activeTrack,
  mobile,
  setMobile,
  isMobileValid,
  orderId,
  setOrderId,
  suggestDeliverCodeDomestic = [],
  suggestPickupPinCodeDomestic = [],
}) => {
  const [sendPriceTellBydistance, setSendPriceTellBydistance] = useState(false);
  const [suggestDeliverCodeDomesticArea, setSuggestDeliverCodeDomesticArea] =
    useState(false);
  const [
    suggestPickupPinCodeDomesticArea,
    setSuggestPickupPinCodeDomesticArea,
  ] = useState(false);

  const [
    selectedSuggestPickupPinCodeDomestic,
    setSelectedSuggestPickupPinCodeDomestic,
  ] = useState(null);

  const [
    selectedSuggestPickupCountryCodeDomestic,
    setSelectedSuggestPickupCountryCodeDomestic,
  ] = useState(null);
  const [
    selectedSuggestPickupStateDomestic,
    setSelectedSuggestPickupStateDomestic,
  ] = useState(null);
  const [
    selectedSuggestPickupCityDomestic,
    setSelectedSuggestPickupCityDomestic,
  ] = useState(null);
  const [
    selectedSuggestPickupLatitudeDomestic,
    setSelectedSuggestPickupLatitudeDomestic,
  ] = useState(null);
  const [
    selectedSuggestPickupLongitudeDomestic,
    setSelectedSuggestPickupLongitudeDomestic,
  ] = useState(null);

  const [
    selectedSuggestDeliverPinCodeDomestic,
    setSelectedSuggestDeliverPinCodeDomestic,
  ] = useState(null);
  const [
    selectedSuggestDeliverStateDomestic,
    setSelectedSuggestDeliverStateDomestic,
  ] = useState(null);
  const [
    selectedSuggestDeliverCityDomestic,
    setSelectedSuggestDeliverCityDomestic,
  ] = useState(null);
  const [
    selectedSuggestDeliverLatitudeDomestic,
    setSelectedSuggestDeliverLatitudeDomestic,
  ] = useState(null);
  const [
    selectedSuggestDeliverCountryCodeDomestic,
    setSelectedSuggestDeliverCountryCodeDomestic,
  ] = useState(null);
  const [
    selectedSuggestDeliverLongitudeDomestic,
    setSelectedSuggestDeliverLongitudeDomestic,
  ] = useState(null);

  const [writeablePickupDomestic, setWriteablePickupDomestic] = useState(true);
  const [writeableDeliverDomestic, setWriteableDeliverDomestic] =
    useState(true);

  const handleSuggestDeliverPinCodeDomesticSuggestion = async (item) => {
    setDeliverCodeDomestic(item.city);
    setSelectedSuggestDeliverPinCodeDomestic(item.postal_code);
    setSelectedSuggestDeliverStateDomestic(item.state);
    setSelectedSuggestDeliverCityDomestic(item.city);
    setSelectedSuggestDeliverLatitudeDomestic(item.latitude);
    setSelectedSuggestDeliverLongitudeDomestic(item.longitude);
    setSelectedSuggestDeliverCountryCodeDomestic(item.country_code);
  };

  const handleSuggestPickupPinCodeDomesticSuggestion = async (item) => {
    setPickupPinCodeDomestic(item.city);
    setSelectedSuggestPickupPinCodeDomestic(item.postal_code);
    setSelectedSuggestPickupStateDomestic(item.state);
    setSelectedSuggestPickupCityDomestic(item.city);
    setSelectedSuggestPickupLatitudeDomestic(item.latitude);
    setSelectedSuggestPickupLongitudeDomestic(item.longitude);
    setSelectedSuggestPickupCountryCodeDomestic(item.country_code);
  };

  useEffect(() => {
    if (
      selectedSuggestPickupPinCodeDomestic !== null &&
      selectedSuggestPickupStateDomestic !== null &&
      selectedSuggestPickupCityDomestic !== null &&
      selectedSuggestPickupLatitudeDomestic !== null &&
      selectedSuggestPickupLongitudeDomestic !== null
    ) {
      setWriteablePickupDomestic(false);
    }
  }, [
    selectedSuggestPickupPinCodeDomestic,
    selectedSuggestPickupStateDomestic,
    selectedSuggestPickupCityDomestic,
    selectedSuggestPickupLatitudeDomestic,
    selectedSuggestPickupLongitudeDomestic,
  ]);

  useEffect(() => {
    if (
      selectedSuggestDeliverPinCodeDomestic !== null &&
      selectedSuggestDeliverStateDomestic !== null &&
      selectedSuggestDeliverCityDomestic !== null &&
      selectedSuggestDeliverLatitudeDomestic !== null &&
      selectedSuggestDeliverLongitudeDomestic !== null
    ) {
      setWriteableDeliverDomestic(false);
    }
  }, [
    selectedSuggestDeliverPinCodeDomestic,
    selectedSuggestDeliverStateDomestic,
    selectedSuggestDeliverCityDomestic,
    selectedSuggestDeliverLatitudeDomestic,
    selectedSuggestDeliverLongitudeDomestic,
  ]);

  useEffect(() => {
    if (suggestDeliverCodeDomestic.length !== 0) {
      setSuggestDeliverCodeDomesticArea(true);
    }
  }, [suggestDeliverCodeDomestic]);

  useEffect(() => {
    if (deliverCodeDomestic.length < 5) {
      setSuggestDeliverCodeDomesticArea(false);
    }
  }, [deliverCodeDomestic]);

  useEffect(() => {
    if (pickupPinCodeDomestic.length < 5) {
      setSuggestPickupPinCodeDomesticArea(false);
    }
  }, [pickupPinCodeDomestic]);

  useEffect(() => {
    if (suggestPickupPinCodeDomestic.length !== 0) {
      setSuggestPickupPinCodeDomesticArea(true);
    }
  }, [suggestPickupPinCodeDomestic]);

  const handleButtonClickDomestic = async (event) => {
    event.preventDefault();
    if (!writeableDeliverDomestic && !writeablePickupDomestic) {
      if (
        selectedSuggestPickupLatitudeDomestic !== null &&
        selectedSuggestPickupLongitudeDomestic !== null &&
        selectedSuggestDeliverLatitudeDomestic !== null &&
        selectedSuggestDeliverLongitudeDomestic !== null &&
        selectedSuggestDeliverCountryCodeDomestic != null &&
        selectedSuggestPickupCountryCodeDomestic != null
      ) {
        if (
          selectedSuggestDeliverCountryCodeDomestic.toLowerCase() ===
          selectedSuggestPickupCountryCodeDomestic.toLowerCase()
        ) {
          if (userEmail) {
            try {
              const response = await fetch("/api/verifyCountryUser", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  country: selectedSuggestDeliverCountryCodeDomestic,
                  email: userEmail,
                }),
              });
              const responseData = await response.json();
              if (responseData) {
                if (responseData.success) {
                  toast.success("Congratulation! You are applicable...");
                  setSendPriceTellBydistance(true);
                } else {
                  toast.error(
                    "different countries are not allowed there...      "
                  );
                }
              }else{
                toast.error("Something went wront.. Reload the page..")
              }
            } catch (error) {
              toast.error("Something went wrong! Reload the page")
            }
          } else {
            toast.error("you are not applicable");
          }
        } else {
          toast.warn("both places are not in same country..");
        }
      } else {
        toast.error("you are not applicable");
      }
    } else {
      toast.error("you are not applicable");
    }
  };

  return (
    <>
     
      {sendPriceTellBydistance ? (
        <>
          <PriceTellByDistance
            selectedSuggestDeliverCityDomestic={
              selectedSuggestDeliverCityDomestic
            }
            selectedSuggestDeliverStateDomestic={
              selectedSuggestDeliverStateDomestic
            }
            selectedSuggestPickupCityDomestic={
              selectedSuggestPickupCityDomestic
            }
            selectedSuggestPickupStateDomestic={
              selectedSuggestDeliverStateDomestic
            }
            selectedSuggestPickupPinCodeDomestic={
              selectedSuggestPickupPinCodeDomestic
            }
            selectedSuggestDeliverPinCodeDomestic={
              selectedSuggestDeliverPinCodeDomestic
            }
            deliverLongitude={selectedSuggestDeliverLongitudeDomestic}
            deliverLatitude={selectedSuggestDeliverLatitudeDomestic}
            pickupLongitude={selectedSuggestPickupLongitudeDomestic}
            pickupLatitude={selectedSuggestPickupLatitudeDomestic}
          />
        </>
      ) : (
        <form className="track-form">
          <div>{error ? <SystemError /> : ""}</div>
          <div className="track-header">
            <ul className="track-list">
              <li
                className={`track-item font-bold ${
                  activeTrack ? "active" : ""
                }`}
                onClick={() => setActiveTrack(true)}
                style={{
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                Track
              </li>
              <li
                style={{
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                }}
                className={`track-item font-bold ${
                  !activeTrack ? "active" : ""
                }`}
                onClick={() => setActiveTrack(false)}
              >
                Ship
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {activeTrack ? (
                <div className="relative w-[100%] h-[100%]">
                  <div
                    className="font-bold mb-5 text-2xl"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Track Your Order Through -
                  </div>
                  <div className="flex w-[290px] justify-center cursor-pointer">
                    <div
                      className={`font-bold text-xl p-[10px] pl-[25px] rounded-l-2xl border border-black ${
                        mobile ? "blacku" : ""
                      }`}
                      onClick={() => setMobile(true)}
                      style={{
                        userSelect: "none",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        msUserSelect: "none",
                      }}
                    >
                      Mobile
                    </div>
                    <div
                      className={`font-bold text-xl p-[10px] pl-[20px] rounded-r-2xl border-black border ${
                        mobile ? "" : "blacku"
                      }`}
                      onClick={() => setMobile(false)}
                      style={{
                        userSelect: "none",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        msUserSelect: "none",
                      }}
                    >
                      Order Id
                    </div>
                  </div>
                  {mobile ? (
                    <div className="mt-[19px] flex flex-col content-center items-center mr-4">
                      <div className="w-[30vw] h-[5vh] ">
                        <input
                          type="tel"
                          name="mobileNo"
                          value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value)}
                          maxLength="10"
                          className="border border-black w-[100%] h-[100%] rounded-lg"
                          placeholder="Enter Phone Number"
                          required
                        />
                      </div>
                      <div>
                        <button
                          onClick={(e) => {
                            handleGetOtpClickForMobileInTrack(e);
                          }}
                          className={`mt-3 border border-black rounded-full p-1 ${
                            !isMobileValid
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          disabled={!isMobileValid}
                          style={{
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                          }}
                        >
                          Get Otp
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-[19px] flex flex-col content-center items-center mr-4">
                      <div className="w-[30vw] h-[5vh] ">
                        <input
                          type="name"
                          name="orderId"
                          value={orderId}
                          onChange={(e) => setOrderId(e.target.value)}
                          maxLength="9"
                          className="border border-black w-[100%] h-[100%] rounded-lg"
                          placeholder="Enter 9 Character's Order Id"
                        />
                      </div>
                      <div>
                        <button
                          disabled={!isOrderIdValid}
                          onClick={(e) => {
                            handleGetOtpClickForOrderIdTrack(e);
                          }}
                          className={`mt-3 border border-black rounded-full p-1 ${
                            !isOrderIdValid
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          }`}
                          style={{
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                          }}
                        >
                          Track Order
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative w-[100%] h-[100%]">
                  <div
                    className="font-bold mb-5 text-2xl"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Ship Personal Courier-
                  </div>
                  <div className="flex w-[290px] justify-center">
                    <div
                      className={`font-bold text-xl p-[10px] pl-[25px] rounded-l-2xl border border-black ${
                        mobile ? "blacku" : ""
                      }`}
                      onClick={() => setMobile(true)}
                      style={{
                        userSelect: "none",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        msUserSelect: "none",
                      }}
                    >
                      Domestic{" "}
                    </div>
                    <div
                      className={`font-bold text-xl p-[10px] pl-[20px] rounded-r-2xl border-black border ${
                        mobile ? "" : "blacku"
                      }`}
                      onClick={() => setMobile(false)}
                      style={{
                        userSelect: "none",
                        MozUserSelect: "none",
                        WebkitUserSelect: "none",
                        msUserSelect: "none",
                      }}
                    >
                      International
                    </div>
                  </div>
                  {mobile ? (
                    <div className="mt-[19px] flex flex-col content-center items-center mr-4 relative">
                      {writeablePickupDomestic ? (
                        <div className="w-[30vw] h-[5vh] relative">
                          <input
                            type="name"
                            name="pickupPinCodeDomestic"
                            value={pickupPinCodeDomestic}
                            onChange={(e) =>
                              setPickupPinCodeDomestic(e.target.value)
                            }
                            className="border border-black w-[100%] h-[100%] rounded-lg"
                            placeholder="Enter Pickup Pin Code"
                          />
                          {suggestPickupPinCodeDomesticArea &&
                            suggestPickupPinCodeDomestic[
                              pickupPinCodeDomestic
                            ] && (
                              <div className="rounded-2xl bg-white border border-black max-h-40 overflow-y-auto absolute top-full left-0 w-full z-10 custom-scrollbar">
                                {suggestPickupPinCodeDomestic[
                                  pickupPinCodeDomestic
                                ].map((item, index) => (
                                  <div
                                    onClick={() => {
                                      handleSuggestPickupPinCodeDomesticSuggestion(
                                        item
                                      );
                                    }}
                                    key={index}
                                  >
                                    {item.city}
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      ) : (
                        <div
                          className="flex items-center border text-nowrap border-black w-[30vw] rounded-lg p-2 outline-none h-[5vh] overflow-hidden scrollable-container"
                          style={{
                            whiteSpace: "nowrap",
                            overflowX: "auto",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <style>
                            {`
         
            .scrollable-container::-webkit-scrollbar {
                height: 6px;
                background-color: #f4f4f4; /* background color of the scrollbar track */
            }
            .scrollable-container::-webkit-scrollbar-thumb {
                background-color: black;
                border-radius: 3px;
     }               
        `}
                          </style>
                          {selectedSuggestPickupPinCodeDomestic}{" "}
                          {selectedSuggestPickupCityDomestic}{" "}
                          {selectedSuggestPickupStateDomestic}
                        </div>
                      )}

                      {writeableDeliverDomestic ? (
                        <div className="w-[30vw] mt-3 h-[5vh] relative">
                          <input
                            name="deliverCodeDomestic"
                            value={deliverCodeDomestic}
                            onChange={(e) =>
                              setDeliverCodeDomestic(e.target.value)
                            }
                            type="name"
                            className="border border-black w-[100%] h-[100%] rounded-lg"
                            placeholder="Enter Deliver Pin Code"
                          />
                          {suggestDeliverCodeDomesticArea &&
                            suggestDeliverCodeDomestic[deliverCodeDomestic] && (
                              <div className="bg-white border border-black max-h-40 overflow-y-auto absolute top-full left-0 w-full z-10">
                                {suggestDeliverCodeDomestic[
                                  deliverCodeDomestic
                                ].map((item, index) => (
                                  <div
                                    onClick={() => {
                                      handleSuggestDeliverPinCodeDomesticSuggestion(
                                        item
                                      );
                                    }}
                                    key={index}
                                  >
                                    {item.city}
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      ) : (
                        <div
                          className="flex items-center border text-nowrap border-black w-[30vw] mt-3 rounded-lg p-2 outline-none h-[5vh] overflow-hidden scrollable-container"
                          style={{
                            whiteSpace: "nowrap",
                            overflowX: "auto",
                            WebkitOverflowScrolling: "touch",
                          }}
                        >
                          <style>
                            {`
         
            .scrollable-container::-webkit-scrollbar {
                height: 6px;
                background-color: #f4f4f4; /* background color of the scrollbar track */
            }
            .scrollable-container::-webkit-scrollbar-thumb {
                background-color: black;
                border-radius: 3px;
     }               
        `}
                          </style>
                          {selectedSuggestDeliverPinCodeDomestic}{" "}
                          {selectedSuggestDeliverCityDomestic}{" "}
                          {selectedSuggestDeliverStateDomestic}
                        </div>
                      )}

                      <div>
                        <button
                          onClick={(e) => {
                            handleButtonClickDomestic(e);
                          }}
                          className={`mt-3 border border-black rounded-full p-1 `}
                          style={{
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                          }}
                        >
                          Get Otp and Ship
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-[19px] flex flex-col content-center items-center mr-4">
                      <div className="w-[30vw] h-[5vh] ">
                        <input
                          type="tel"
                          name="pickupPinCodeInternational"
                          value={pickupPinCodeInternational}
                          onChange={(e) =>
                            setPickupPinCodeInternational(e.target.value)
                          }
                          maxLength="10"
                          className="border border-black w-[100%] h-[100%] rounded-lg"
                          placeholder="Enter Pickup Pin Code"
                        />
                      </div>
                      <div className="w-[30vw] mt-3 h-[5vh] ">
                        <label
                          htmlFor="country"
                          className="mr-4"
                          style={{
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                          }}
                        >
                          Select Country
                        </label>
                        <select
                          onChange={(e) => setCountry(e.target.value)}
                          value={country}
                          name="country"
                          className="border border-black w-[37%] h-[100%] rounded-lg"
                        >
                          {countryData.length > 0 &&
                            countryData.map((item, index) => (
                              <option key={index} value={item.name}>
                                {item.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div>
                        <button
                          className="mt-3 border border-black rounded-full p-1"
                          onClick={() => {}}
                          style={{
                            userSelect: "none",
                            MozUserSelect: "none",
                            WebkitUserSelect: "none",
                            msUserSelect: "none",
                          }}
                        >
                          Get Otp and Ship
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </ul>
          </div>
        </form>
      )}
    </>
  );
};

export default Trackaship1;
