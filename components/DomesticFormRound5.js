import { useEffect, useState } from "react";
import Script from "next/script";
import { toast } from "react-toastify";
const DomesticFormRound5 = ({
  round1Data,
  round2Data,
  round3Data,
  round4Data,
}) => {
  console.log(round2Data);
  const [finalPrice, setFinalPrice] = useState(null);
  useEffect(() => {
    if (round2Data.deliveryPrice != null && round2Data.insurancePrice != null) {
      setFinalPrice(round2Data.deliveryPrice + round2Data.insurancePrice);
    }
  }, [round2Data.deliveryPrice, round2Data.insurancePrice]);

  const createOrderId = async () => {
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: finalPrice * 100,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  const processPayment = async () => {
    try {
      const orderId = await createOrderId();
      const options = {
        key: process.env.key_id,
        amount: finalPrice * 100,
        currency: "USD",
        name: round1Data.pickupContactName,
        description: `Transaction for ${process.env.NAME}`,
        order_id: orderId,
        handler: async function (response) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          const res = await result.json();
          if (res.isOk) {
            toast.success("Payment succed");
          } else {
            toast.error(res.message);
          }
        },
        prefill: {
          name: round1Data.pickupContactName,
          email: round1Data.pickupEmail,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        toast.error("oye");
        toast.error(response.error.description);
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[70vh] bg-gray-50">
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <div className="flex flex-col justify-center items-center h-80 w-96 bg-white rounded-lg shadow-md p-6">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Bill Details
          </h2>
          <span className="text-lg mb-2">
            <strong>Amount:</strong> ${round2Data.deliveryPrice} +{""}$
            {round2Data.insurancePrice} =
          </span>
          <span className="bg-blue-200 p-1 text-lg">${finalPrice}</span>
          <p className="text-lg mb-4">
            <strong>Name:</strong> {round1Data.pickupContactName}
          </p>
          <button
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => {
              processPayment();
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DomesticFormRound5;
