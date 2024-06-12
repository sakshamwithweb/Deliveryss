import { useState, useEffect } from "react";
import TrackItems from "./trackItems";
import MoreInfoTrack from "./moreInfoTrack";

const Tracked = ({ data }) => {
  const [list, setList] = useState(true);
  const [orderId, setOrderId] = useState("");
  const [dataMYComplete, setDataMYComplete] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!list) {
          const response = await fetch("/api/trackfortracknyorderId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ orderId }),
          });
          const dataAsOrderId = await response.json();
          if (dataAsOrderId.data) {
            setDataMYComplete(dataAsOrderId.data);
          }
        }
      } catch (error) {
        console.error("Error fetching tracking data:", error);
      }
    };

    fetchData();
  }, [list, orderId]);

  return (
    <div>
      {list ? (
        <div className="">
          <div>
            <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
              Track your courier here
            </h1>
          </div>
          {data.map((item) => (
            <TrackItems
              key={item.order_Id}
              title={item.product_name}
              orderId={item.order_Id}
              status={item.status}
              deliverBy={item.delivered_date}
              setList={setList}
              setOrderId={setOrderId}
            />
          ))}
        </div>
      ) : (
        <>
          {dataMYComplete && (
            <MoreInfoTrack
              percent={dataMYComplete.completePercent}
              title={dataMYComplete.product_name}
              phoneNumberDeliveryBoy={dataMYComplete.deliveryPartnerPhoneNumber}
              orderDetails={dataMYComplete}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Tracked;
