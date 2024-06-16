"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [orderId, setOrderId] = useState(null);
  const [orderIdValid, setOrderIdValid] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const queryString = window.location.href.split("?")[1];
    const params = new URLSearchParams(queryString);
    const orderId = params.get("orderId");
    setOrderId(orderId);
  }, []);
      
  useEffect(() => {
    if (orderId != null && orderId.trim().length === 10) {
      try {
        (async () => {
          const response = await fetch("/api/checkOrderId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderId: orderId }),
          });
          const data = await response.json();
          if (data.success) {
            setOrderIdValid(true);
          }
        })();
      } catch (error) {
      }
    } else {
      setOrderIdValid(false);
    }
  }, [orderId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {orderIdValid ? (
        <div className="bg-blue-50 border border-green-500 rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/success.png"
              alt="Success Tick"
              width={50}
              height={50}
              className="no-select"
            />
          </div>
          <p className="text-lg text-center no-select">
            Your order has been submitted!
          </p>
          <div className="text-center no-select">
            <span>Order ID:</span>
            <span>{orderId}</span>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                router.push("/");
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded no-select"
            >
              Go to Home
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-red-50 border border-red-500 rounded-lg p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/wrong.png"
              alt="Error Cross"
              width={50}
              height={50}
              className="no-select"
            />
          </div>
          <p className="text-lg text-center no-select">Incorrect Order ID!</p>
          <p className="text-sm text-center text-gray-600 no-select">
            Please check the Order ID and try again.
          </p>
          <div className="flex justify-center mt-4">
            <button
              onClick={() => {
                router.push("/");
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded no-select"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
