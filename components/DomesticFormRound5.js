import { useEffect, useState } from "react";
import Script from "next/script";
import { toast } from "react-toastify";

const DomesticFormRound5 = ({
  round1Data,
  round2Data,
  round3Data,
  round4Data,
}) => {
  const [finalPrice, setFinalPrice] = useState(0); // Initialize finalPrice with 0
  const [uniqueOrderId, setUniqueOrderId] = useState(""); // Initialize uniqueOrderId with empty string

  useEffect(() => {
    // Calculate finalPrice whenever deliveryPrice or insurancePrice changes
    if (round2Data.deliveryPrice != null && round2Data.insurancePrice != null) {
      setFinalPrice(round2Data.deliveryPrice + round2Data.insurancePrice);
    }
  }, [round2Data.deliveryPrice, round2Data.insurancePrice]);

  const generateRandomString = (length, chars) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateUniqueOrderId = async () => {
    const prefix = generateRandomString(5, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    const suffix = generateRandomString(5, "0123456789");
    return `${prefix}${suffix}`;
  };

  useEffect(() => {
    // Generate uniqueOrderId when component mounts
    (async () => {
      const orderId = await generateUniqueOrderId();
      setUniqueOrderId(orderId);
    })();
  }, []);

  const createOrderId = async () => {
    try {
      // Call your backend API to create a payment order
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: finalPrice * 100, // Convert finalPrice to cents (assuming currency in dollars)
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.orderId; // Return orderId from the response
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      toast.error("There was a problem creating the payment order.");
    }
  };

  const processPayment = async () => {
    try {
      const orderId = await createOrderId();

      // Configure options for Razorpay payment
      const options = {
        key: process.env.key_id, // Replace with your Razorpay key_id
        amount: finalPrice * 100, // Amount in cents
        currency: "USD", // Currency code
        name: round1Data.pickupContactName, // Name of the payee
        description: "Transaction for Delivery", // Description of the transaction
        order_id: orderId, // orderId obtained from createOrderId()
        handler: async function (response) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          try {
            // Verify payment on your backend
            const result = await fetch("/api/verify", {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            });
            const res = await result.json();
            
            if (res.isOk) {
              // Payment is verified, proceed to save to database
              const saveResponse = await fetch("/api/shipVerifiedSendDB", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  round1Data,
                  round2Data,
                  round3Data,
                  round4Data,
                  uniqueOrderId,
                }),
              });
              
              const saveData = await saveResponse.json();
              if (saveData.success) {
                toast.success("Product details submitted.");
              } else {
                toast.error("Failed to save product details.");
              }
            } else {
              toast.error(res.message);
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            toast.error("Payment verification failed.");
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

      // Initialize Razorpay payment object
      const paymentObject = new window.Razorpay(options);

      // Handle payment failure
      paymentObject.on("payment.failed", function (response) {
        toast.error("Payment failed");
        toast.error(response.error.description);
      });

      // Open Razorpay payment modal
      paymentObject.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      toast.error("Payment processing failed.");
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
            <strong>Amount:</strong> ${round2Data.deliveryPrice} + $
            {round2Data.insurancePrice} =
          </span>
          <span className="bg-blue-200 p-1 text-lg">${finalPrice}</span>
          <p className="text-lg mb-4">
            <strong>Name:</strong> {round1Data.pickupContactName}
          </p>
          <button
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={processPayment}
          >
            Pay Now
          </button>
          <p className="text-lg mt-4">
            <strong>Order ID:</strong> {uniqueOrderId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomesticFormRound5;
