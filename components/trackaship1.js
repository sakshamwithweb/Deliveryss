import { useEffect, useState } from "react";
import SystemError from "./systemError";
import PriceTellByDistance from "./priceTellByDistance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Trackaship1 = ({
  userEmail,
  countryData,
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

  const [country, setCountry] = useState("");

  const [
    suggestPickupPinCodeInternational,
    setSuggestPickupPinCodeInternational,
  ] = useState([]);

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

  const [
    suggestPickupPinCodeInternationalArea,
    setSuggestPickupPinCodeInternationalArea,
  ] = useState(false);

  const [
    selectedSuggestPickupPinCodeInternational,
    setSelectedSuggestPickupPinCodeInternational,
  ] = useState(null);
  const [
    selectedSuggestPickupStateInternational,
    setSelectedSuggestPickupStateInternational,
  ] = useState(null);
  const [
    selectedSuggestPickupCityInternational,
    setSelectedSuggestPickupCityInternational,
  ] = useState(null);
  const [
    selectedSuggestPickupLatitudeInternational,
    setSelectedSuggestPickupLatitudeInternational,
  ] = useState(null);
  const [
    selectedSuggestPickupLongitudeInternational,
    setSelectedSuggestPickupLongitudeInternational,
  ] = useState(null);

  const [
    selectedSuggestDeliverLatitudeInternational,
    setSelectedSuggestDeliverLatitudeInternational,
  ] = useState(null);
  const [
    selectedSuggestDeliverLongitudeInternational,
    setSelectedSuggestDeliverLongitudeInternational,
  ] = useState(null);
  const [
    selectedSuggestPickupCountryCodeInternational,
    setSelectedSuggestPickupCountryCodeInternational,
  ] = useState(null);

  const [writeablePickupInternational, setWriteablePickupInternational] =
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

  const handleSuggestPickupPinCodeInternationalSuggestion = (item) => {
    setPickupPinCodeInternational(item.city);
    setSelectedSuggestPickupPinCodeInternational(item.postal_code);
    setSelectedSuggestPickupStateInternational(item.state);
    setSelectedSuggestPickupCityInternational(item.city);
    setSelectedSuggestPickupLatitudeInternational(item.latitude);
    setSelectedSuggestPickupLongitudeInternational(item.longitude);
    setSelectedSuggestPickupCountryCodeInternational(item.country_code);
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
      selectedSuggestPickupPinCodeInternational !== null &&
      selectedSuggestPickupStateInternational !== null &&
      selectedSuggestPickupCityInternational !== null &&
      selectedSuggestPickupLatitudeInternational !== null &&
      selectedSuggestPickupLongitudeInternational !== null
    ) {
      setWriteablePickupInternational(false);
    }
  }, [
    selectedSuggestPickupPinCodeInternational,
    selectedSuggestPickupStateInternational,
    selectedSuggestPickupCityInternational,
    selectedSuggestPickupLatitudeInternational,
    selectedSuggestPickupLongitudeInternational,
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
              } else {
                toast.error("Something went wront.. Reload the page..");
              }
            } catch (error) {
              toast.error("Something went wrong! Reload the page");
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

  //send in pricetellbydistance to international
  //see after handleButtonClickInternational
  useEffect(() => {
    //when we fetched the latitude and longitude of deliver country for international so we set the value.
    if (
      selectedSuggestDeliverLatitudeInternational !== null &&
      selectedSuggestDeliverLongitudeInternational !== null &&
      selectedSuggestPickupLongitudeInternational !== null &&
      selectedSuggestPickupLatitudeInternational !== null &&
      selectedSuggestPickupCityInternational !== null &&
      selectedSuggestPickupStateInternational !== null &&
      selectedSuggestPickupPinCodeInternational !== null
    ) {
      //when we know all so now show that user is appliable(Don't worry i have checked a condition in api to not get null value in longitude and latitude)
      toast.success("Congratulation! You are applicable...");
      //turn the international ship to pricetellbydistance component
      setSendPriceTellBydistance(true);
    }
  }, [
    selectedSuggestDeliverLatitudeInternational,
    selectedSuggestDeliverLongitudeInternational,
    selectedSuggestPickupLongitudeInternational,
    selectedSuggestPickupLatitudeInternational,
  ]);

  //work when international ship btn is clicked
  const handleButtonClickInternational = async (e) => {
    //to prevent from loading
    e.preventDefault();
    //when all thing is set and btn is clicked condition
    if (
      country.length !== 0 &&
      country.toLowerCase() != "select country" &&
      !writeablePickupInternational
    ) {
      //looking for user's email. If exist even now so give to verifyCountryUser so as to it will check whether country of user and pickup country is same or not from here-
      if (userEmail) {
        try {
          // giving to verifyCountryUser
          const response = await fetch("/api/verifyCountryUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              country: selectedSuggestPickupCountryCodeInternational,
              email: userEmail,
            }),
          });
          //get the response
          const responseData = await response.json();
          // if response has data nad success is true
          if (responseData) {
            if (responseData.success) {
              //now user country is same as pickup country
              //So check deiver country distance for that we need longitude and latitude so do by countryName we got from upper.
              const response2 = await fetch("/api/countryWithCapitalPinCode", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  deliverCountry: country,
                }),
              });
              const response2Data = await response2.json();
              if (response2Data.success) {
                //setting the value of deliver country's latitude and longitude
                setSelectedSuggestDeliverLatitudeInternational(
                  response2Data.data.latitude
                );
                setSelectedSuggestDeliverLongitudeInternational(
                  response2Data.data.longitude
                );

                //now see useefect where deliver longitude is called,,
                //if error comes-
              } else {
                toast.error("Sorry you are not applicable");
              }
            } else {
              toast.error("Write your country's pin code in pickup...");
            }
          } else {
            toast.error("Something went wront.. Reload the page..");
          }
        } catch (error) {
          toast.error("Something went wrong! Reload the page");
        }
      } //- till here
    } else {
      //if all are not set after clicking the btn
      toast.error("All fields are compulsory");
    }
  };

  //check to add suggestions in international ship pickup input
  useEffect(() => {
    // when user has written 5 digit or more pin code in input
    if (pickupPinCodeInternational.length >= 5) {
      // Use IIFE concept to direct call function
      //This function will fetch the array of same pin code
      (async () => {
        try {
          //try to fetch
          const response = await fetch("/api/pincodeToAddressDomesticVerify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            //give pincode
            body: JSON.stringify({ pincode: pickupPinCodeInternational }),
          });
          const data = await response.json();
          //if no server error is there and it is suceed
          if (data.success) {
            // when atleast single data is as user input
            if (data.result.length != 0) {
              // setting the array in setSuggestPickupPinCodeInternational.
              setSuggestPickupPinCodeInternational(
                data.result[pickupPinCodeInternational]
              );
              // else if 0 data pincode is as user input
            } else {
              setSuggestPickupPinCodeInternational([]);
            }
            // when error is there any
          } else {
            setSuggestPickupPinCodeInternational([]);
          }
          // if error comes during following try.
        } catch (error) {
          setSuggestPickupPinCodeInternational([]);
        }
      })();
      //if user type less than 5 so don't suggest anything
    } else {
      setSuggestPickupPinCodeInternational([]);
    }
  }, [pickupPinCodeInternational]);

  //when suggestions is there for international ship pickup.
  useEffect(() => {
    //if array has some data so show suggestions
    if (suggestPickupPinCodeInternational.length !== 0) {
      setSuggestPickupPinCodeInternationalArea(true);
    } else {
      //when array is blank so hide the suggestions
      setSuggestPickupPinCodeInternationalArea();
    }
  }, [suggestPickupPinCodeInternational]);

  return (
    <>
      {sendPriceTellBydistance ? (
        <>
          <PriceTellByDistance
          mobile={mobile}
          country={country}
            selectedSuggestDeliverCityDomestic={
              selectedSuggestDeliverCityDomestic
            }
            selectedSuggestDeliverStateDomestic={
              selectedSuggestDeliverStateDomestic
            }
            selectedSuggestPickupCity={
              mobile
                ? selectedSuggestPickupCityDomestic
                : selectedSuggestPickupCityInternational
            }
            selectedSuggestPickupState={
              mobile
                ? selectedSuggestDeliverStateDomestic
                : selectedSuggestPickupStateInternational
            }
            selectedSuggestPickupPinCode={
              mobile
                ? selectedSuggestPickupPinCodeDomestic
                : selectedSuggestPickupPinCodeInternational
            }
            selectedSuggestDeliverPinCodeDomestic={
              selectedSuggestDeliverPinCodeDomestic
            }
            deliverLongitude={
              mobile
                ? selectedSuggestDeliverLongitudeDomestic
                : selectedSuggestDeliverLongitudeInternational
            }
            deliverLatitude={
              mobile
                ? selectedSuggestDeliverLatitudeDomestic
                : selectedSuggestDeliverLatitudeInternational
            }
            pickupLongitude={
              mobile
                ? selectedSuggestPickupLongitudeDomestic
                : selectedSuggestPickupLongitudeInternational
            }
            pickupLatitude={
              mobile
                ? selectedSuggestPickupLatitudeDomestic
                : selectedSuggestPickupLatitudeInternational
            }
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
                          maxLength="10"
                          className="border border-black w-[100%] h-[100%] rounded-lg"
                          placeholder="Enter 10 Character's Order Id"
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
                      {writeablePickupInternational ? (
                        <div className="w-[30vw] h-[5vh] relative">
                          {" "}
                          {/* Added relative positioning */}
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
                          {suggestPickupPinCodeInternationalArea && (
                            <div
                              className={`rounded-2xl bg-white max-h-40 ${
                                suggestPickupPinCodeInternational.length !==
                                  0 && "border border-black"
                              } overflow-y-auto absolute top-full left-0 w-full z-10 custom-scrollbar`}
                            >
                              {suggestPickupPinCodeInternational.map(
                                (item, index) => (
                                  <div
                                    onClick={() => {
                                      handleSuggestPickupPinCodeInternationalSuggestion(
                                        item
                                      );
                                    }}
                                    key={index}
                                  >
                                    {item.city}
                                  </div>
                                )
                              )}
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
                          {selectedSuggestPickupPinCodeInternational}{" "}
                          {selectedSuggestPickupCityInternational}{" "}
                          {selectedSuggestPickupStateInternational}
                        </div>
                      )}

                      <div className="bg-slate-100 vh] text-gray-500 text-sm"></div>
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
                          <option className="bg-gray-100">
                            Select Country
                          </option>
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
                          onClick={(e) => {
                            handleButtonClickInternational(e);
                          }}
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
