import { useEffect, useState } from "react";
import MoreInfoTrack from "./moreInfoTrack";
import Trackaship1 from "./trackaship1";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TrackAShip = (props) => {
  const [activeTrack, setActiveTrack] = useState(true);
  const [mobile, setMobile] = useState(true);
  const [countryData, setCountryData] = useState([]);
  const [mobileNo, setMobileNo] = useState("");
  const [orderId, setOrderId] = useState("");
  const [pickupPinCodeDomestic, setPickupPinCodeDomestic] = useState("");
  const [pickupPinCodeInternational, setPickupPinCodeInternational] =
    useState("");
  const [deliverCodeDomestic, setDeliverCodeDomestic] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const isMobileValid = mobileNo.length === 10;
  const isOrderIdValid = orderId.length === 9;

  const [moreInfoByOrderId, setMoreInfoByOrderId] = useState(false);
  const [moreInfoByOrderIdData, setMoreInfoByOrderIdData] = useState({});
  const [moreInfoByOrderIdDataTrue, setMoreInfoByOrderIdDataTrue] =
    useState(false);
  const [suggestPickupPinCodeDomestic, setSuggestPickupPinCodeDomestic] =
    useState([]);
  const [suggestDeliverCodeDomestic, setSuggestDeliverCodeDomestic] = useState(
    []
  );
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    if (props.email) {
      setUserEmail(props.email);
    }
  }, []);

  useEffect(() => {
    if (pickupPinCodeDomestic.length >= 5) {
      const fetchu = async () => {
        const response = await fetch("/api/pincodeToAddressDomesticVerify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pincode: pickupPinCodeDomestic,
            dual: false,
          }),
        });
        const payloadDataPickupPinCodeDomestic = await response.json();
        setSuggestPickupPinCodeDomestic(
          payloadDataPickupPinCodeDomestic.result
        );
      };
      fetchu();
    }
  }, [pickupPinCodeDomestic]);

  useEffect(() => {
    if (deliverCodeDomestic.length >= 5) {
      const fetchu = async () => {
        const response = await fetch("/api/pincodeToAddressDomesticVerify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pincode: deliverCodeDomestic,
            dual: false,
          }),
        });
        const payloadDataDeliverCodeDomestic = await response.json();
        setSuggestDeliverCodeDomestic(payloadDataDeliverCodeDomestic.result);
      };
      fetchu();
    }
  }, [deliverCodeDomestic]);

  useEffect(() => {
    if (moreInfoByOrderIdData?.product_name != null) {
      setMoreInfoByOrderIdDataTrue(true);
    }
  }, [moreInfoByOrderIdData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("api/countrystate");
        const data = await response.json();
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleGetOtpClickForMobileInTrack = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/emailFromMobileNo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNo: mobileNo }),
    });
    const data = await response.json();
    if (data.email == undefined || data.email == null || data.email == "") {
      setError(true);
    } else {
      const { email } = data;
      props.setOtp(true);
      props.setEmailForOtp(email);
    }
  };

  const handleGetOtpClickForOrderIdTrack = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/trackfortracknyorderId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ orderId: orderId }),
    });
    const datas = await response.json();
    console.log(datas.data)
    if (datas.data == undefined || datas.data == null || datas.length == 0) {
      toast.error("We are unable to find. Recheck");
      console.log("We are unable to find. Recheck");
    } else {
      toast.success("Order found")
      setMoreInfoByOrderId(true);
      setMoreInfoByOrderIdData(datas.data);
      if (moreInfoByOrderIdData?.product_name != null) {
        setMoreInfoByOrderIdDataTrue(true);
        console.log("Order found")
      }
    }
  };

  return (
    <>
      {moreInfoByOrderId && moreInfoByOrderIdDataTrue ? (
        <MoreInfoTrack
          percent={moreInfoByOrderIdData.completePercent}
          title={moreInfoByOrderIdData.product_name}
          phoneNumberDeliveryBoy={
            moreInfoByOrderIdData.deliveryPartnerPhoneNumber
          }
          orderDetails={moreInfoByOrderIdData}
        />
      ) : (
        <Trackaship1
          suggestDeliverCodeDomestic={suggestDeliverCodeDomestic}
          suggestPickupPinCodeDomestic={suggestPickupPinCodeDomestic}
          mobileNo={mobileNo}
          handleGetOtpClickForMobileInTrack={handleGetOtpClickForMobileInTrack}
          isMobileValid={isMobileValid}
          mobile={mobile}
          setMobile={setMobile}
          error={error}
          setActiveTrack={setActiveTrack}
          activeTrack={activeTrack}
          setMobileNo={setMobileNo}
          orderId={orderId}
          setOrderId={setOrderId}
          isOrderIdValid={isOrderIdValid}
          handleGetOtpClickForOrderIdTrack={handleGetOtpClickForOrderIdTrack}
          pickupPinCodeDomestic={pickupPinCodeDomestic}
          setPickupPinCodeDomestic={setPickupPinCodeDomestic}
          deliverCodeDomestic={deliverCodeDomestic}
          setDeliverCodeDomestic={setDeliverCodeDomestic}
          pickupPinCodeInternational={pickupPinCodeInternational}
          setPickupPinCodeInternational={setPickupPinCodeInternational}
          country={country}
          setCountry={setCountry}
          countryData={countryData}
          userEmail={userEmail}
        />
      )}
    </>
  );
};

export default TrackAShip;
