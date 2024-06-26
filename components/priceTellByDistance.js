import React, { useState, useEffect } from "react";
import DomesticForm from "./domesticForm";

const PriceTellByDistance = ({
  country,
  pickupLatitude,
  pickupLongitude,
  deliverLatitude,
  deliverLongitude,
  selectedSuggestDeliverPinCodeDomestic,
  selectedSuggestPickupPinCode,
  selectedSuggestPickupState,
  selectedSuggestPickupCity,
  selectedSuggestDeliverCityDomestic,
  selectedSuggestDeliverStateDomestic,
  mobile,
}) => {
  const [domesticForm, setDomesticForm] = useState(false);
  const [distance, setDistance] = useState(null);
  const [priceList, setPriceList] = useState([]);

  const R = 6371;

  const weightRanges = mobile
    ? [
        { min: 1, max: 50, factor: 1.0, id: 1 },
        { min: 50, max: 200, factor: 2.0, id: 2 },
        { min: 200, max: 500, factor: 3.0, id: 3 },
        { min: 500, max: 1000, factor: 4.0, id: 4 },
        { min: 1000, max: 2000, factor: 5.0, id: 5 },
        { min: 2000, max: 5000, factor: 6.0, id: 6 },
        { min: 5000, max: 25000, factor: 7.0, id: 7 },
        { min: 25000, max: 50000, factor: 8.0, id: 8 },
      ]
    : [
        { min: 1, max: 50, factor: 1.2, id: 1 },
        { min: 50, max: 200, factor: 2.4, id: 2 },
        { min: 200, max: 500, factor: 3.6, id: 3 },
        { min: 500, max: 1000, factor: 4.8, id: 4 },
        { min: 1000, max: 2000, factor: 6.0, id: 5 },
        { min: 2000, max: 5000, factor: 7.2, id: 6 },
        { min: 5000, max: 25000, factor: 8.4, id: 7 },
        { min: 25000, max: 50000, factor: 9.6, id: 8 },
      ];

  const deg2rad = (deg) => deg * (Math.PI / 180);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(2);
  };

  useEffect(() => {
    if (
      pickupLatitude &&
      pickupLongitude &&
      deliverLatitude &&
      deliverLongitude
    ) {
      const dist = calculateDistance(
        parseFloat(pickupLatitude),
        parseFloat(pickupLongitude),
        parseFloat(deliverLatitude),
        parseFloat(deliverLongitude)
      );
      setDistance(parseFloat(dist));
    }
  }, [pickupLatitude, pickupLongitude, deliverLatitude, deliverLongitude]);

  useEffect(() => {
    if (distance != null) {
      const prices = weightRanges.map((range) => {
        const basePrice = distance / 400;
        const calculatedPrice = basePrice * range.factor;
        const roundedPrice = Math.round(calculatedPrice * 100) / 100;
        const weightLabel =
          range.max >= 1000
            ? `${range.min / 1000} kg - ${range.max / 1000} kg`
            : `${range.min} g - ${range.max} g`;
        return {
          weight: weightLabel,
          price: roundedPrice,
        };
      });

      setPriceList(prices);
    }
  }, [distance]);

  return (
    <div
      className="flex flex-col items-center justify-center p-4"
      style={{
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <>
        {domesticForm ? (
          <>
            <DomesticForm
            country={country}
              mobile={mobile}
              distance={distance}
              weightRanges={weightRanges}
              selectedSuggestPickupPinCodeDomestic={
                selectedSuggestPickupPinCode
              }
              selectedSuggestDeliverPinCodeDomestic={
                selectedSuggestDeliverPinCodeDomestic
              }
              selectedSuggestDeliverCityDomestic={
                selectedSuggestDeliverCityDomestic
              }
              selectedSuggestDeliverStateDomestic={
                selectedSuggestDeliverStateDomestic
              }
              selectedSuggestPickupCityDomestic={selectedSuggestPickupCity}
              selectedSuggestPickupStateDomestic={selectedSuggestPickupState}
            />
          </>
        ) : (
          <>
            {" "}
            {distance != null ? (
              <div className="bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">
                  Distance: {distance} km
                </h1>
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600 uppercase tracking-wider">
                        Weight
                      </th>
                      <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((item, index) => (
                      <tr key={index}>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {item.weight}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          $ {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
            <button
              onClick={() => {
                if (selectedSuggestPickupPinCode != null) {
                  setDomesticForm(true);
                }
              }}
              className="p-[12px] bg-blue-500 m-4 text-white font-bold rounded-3xl px-5 "
            >
              Next
            </button>
          </>
        )}
      </>
    </div>
  );
};

export default PriceTellByDistance;
