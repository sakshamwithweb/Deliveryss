import React, { useEffect, useState } from "react";
import DomesticFormRound1 from "./domesticFormRound1";
import DomesticFormRound2 from "./domesticFormRound2";
import DomesticFormRound3 from "./domesticFormRound3";
import DomesticFormRound4 from "./domesticFormRound4";
import DomesticFormRound5 from "./DomesticFormRound5";

const DomesticForm = ({
  selectedSuggestPickupPinCodeDomestic,
  selectedSuggestDeliverPinCodeDomestic,
  selectedSuggestDeliverCityDomestic,
  selectedSuggestPickupStateDomestic,
  selectedSuggestPickupCityDomestic,
  selectedSuggestDeliverStateDomestic,
  country={country},
  weightRanges,
  distance,
  mobile
}) => {
  const [selectedComponent, setSelectedComponent] = useState(1);
  const [round1Data, setRound1Data] = useState({});
  const [round2Data, setRound2Data] = useState({});
  const [round3Data, setRound3Data] = useState({});
  const [round4Data, setRound4Data] = useState({});
  const [profit, setProfit] = useState();

  useEffect(() => {
    if (Object.keys(round1Data).length > 0) {
      console.log("round1 data- ", round1Data);
    }
  }, [round1Data]);

  useEffect(() => {
    if (Object.keys(round2Data).length > 0) {
      console.log("round2 data- ", round2Data);
    }
  }, [round2Data]);

  useEffect(() => {
    if (Object.keys(round3Data).length > 0) {
      console.log("round3 data- ", round3Data);
    }
  }, [round3Data]);

  useEffect(() => {
    if (Object.keys(round4Data).length > 0) {
      console.log("round4 data- ", round4Data);
    }
  }, [round4Data]);

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 1:
        return (
          <DomesticFormRound1 mobile={mobile}
          country={country}
            setRound1Data={setRound1Data}
            setSelectedComponent={setSelectedComponent}
            selectedSuggestDeliverPinCodeDomestic={
              selectedSuggestDeliverPinCodeDomestic
            }
            selectedSuggestPickupPinCodeDomestic={
              selectedSuggestPickupPinCodeDomestic
            }
            selectedSuggestDeliverCityDomestic={
              selectedSuggestDeliverCityDomestic
            }
            selectedSuggestPickupStateDomestic={
              selectedSuggestPickupStateDomestic
            }
            selectedSuggestPickupCityDomestic={
              selectedSuggestPickupCityDomestic
            }
            selectedSuggestDeliverStateDomestic={
              selectedSuggestDeliverStateDomestic
            }
          />
        );
      case 2:
        return (
          <DomesticFormRound2
            setRound2Data={setRound2Data}
            setSelectedComponent={setSelectedComponent}
            distance={distance}
            weightRanges={weightRanges}
            setProfit={setProfit}
          />
        );

      case 3:
        return (
          <DomesticFormRound3
            distance={distance}
            setRound3Data={setRound3Data}
            setSelectedComponent={setSelectedComponent}
          />
        );
      case 4:
        return (
          <>
            <DomesticFormRound4
              round3Data={round3Data}
              round2Data={round2Data}
              round1Data={round1Data}
              setRound4Data={setRound4Data}
              setSelectedComponent={setSelectedComponent}
            />
          </>
        );
      case 5:
        return (
          <>
            <DomesticFormRound5
              profit={profit}
              round1Data={round1Data}
              round2Data={round2Data}
              round3Data={round3Data}
              round4Data={round4Data}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-slate-100 h-[80vh] w-[90vw] p-6">
      <div className="round-1">{renderSelectedComponent()}</div>
    </div>
  );
};

export default DomesticForm;
