import React, { useState } from "react";

const SubDomesticPickupFormRound1 = ({
  setPickupAddressWrite,
  closeIcon,
  selectedSuggestPickupPinCodeDomestic,
  selectedSuggestPickupCityDomestic,
  selectedSuggestPickupStateDomestic,
  setPickupContactName,
  setPickupEmail,
  setPickupFlatNumber,
  setPickupMobileNo,
  setPickupStreet,
  setPickupFormSubmit,
}) => {
  const [contactName, setContactName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [street, setStreet] = useState("");
  const [formErr, setFormErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contactName.trim() &&
      mobileNumber.trim() &&
      email.trim() &&
      flatNumber.trim() &&
      street.trim() &&
      selectedSuggestPickupCityDomestic &&
      selectedSuggestPickupStateDomestic &&
      selectedSuggestPickupPinCodeDomestic
    ) {
      setFormErr(false);
      setPickupAddressWrite(false);
      setPickupContactName(contactName);
      setPickupEmail(email);
      setPickupFlatNumber(flatNumber);
      setPickupMobileNo(mobileNumber);
      setPickupStreet(street);
      setPickupFormSubmit(true);
    } else {
      setFormErr(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg relative h-[90vh] w-[46vw] overflow-y-auto scrollbar">
        <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => setPickupAddressWrite(false)}
        >
          {closeIcon}
        </div>
        <h1 className="text-lg font-bold mb-3">Add Pickup Address</h1>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <h2 className="text-base font-semibold">DELIVERY CONTACT DETAILS</h2>
          <div className="flex space-x-3">
            <div className="w-1/2">
              <label className="block text-sm text-gray-700">
                Contact Name
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500">
                We’ll call this number to coordinate delivery
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <h2 className="text-base font-semibold">ADDRESS DETAILS</h2>
          <div>
            <label className="block text-sm text-gray-700">
              Flat, Housing no., Building, Apartment
            </label>
            <input
              type="text"
              value={flatNumber}
              onChange={(e) => setFlatNumber(e.target.value)}
              className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">
              Area, street, sector
            </label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Pincode</label>
            <input
              value={selectedSuggestPickupPinCodeDomestic}
              readOnly
              type="text"
              className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">City</label>
            <input
              type="text"
              value={selectedSuggestPickupCityDomestic}
              readOnly
              name="city"
              className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">State</label>
            <input
              value={selectedSuggestPickupStateDomestic}
              readOnly
              type="text"
              className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Submit
          </button>
          <div
            className={`text-center font-bold ${formErr ? "text-red-500" : ""}`}
          >
            All fields are required
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubDomesticPickupFormRound1;
