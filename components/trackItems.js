import React from "react";

const TrackItems = ({
  title,
  orderId,
  status,
  deliverBy,
  setList,
  setOrderId,
}) => {
  const truncateTitle = (title) => {
    if (title) {
      return title.length > 30 ? `${title.slice(0, 30)}...` : title;
      
    }
  };

  return (
    <div
      className="m-6 h-30 w-100 border border-gray-300 rounded-lg shadow-md p-4 flex flex-col bg-white"
      onClick={() => {
        setList(false);
        setOrderId(orderId);
      }}
    >
      <div className="text-2xl font-bold mb-4 text-gray-800 text-center">
        {truncateTitle(title)}
      </div>
      <div className="w-full mb-2 text-gray-700 flex flex-col items-center">
        <div className="w-full flex justify-between">
          <span className="font-semibold">Status:</span>
          <span>{status}</span>
        </div>
      </div>
      <div className="w-full mb-2 text-gray-700 flex flex-col items-center">
        <div className="w-full flex justify-between">
          <span className="font-semibold">Deliver By:</span>
          <span>{deliverBy}</span>
        </div>
      </div>
      <div className="w-full text-gray-600 flex flex-col items-center">
        <div className="w-full flex justify-between">
          <span className="font-semibold">Order ID:</span>
          <span>{orderId}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackItems;
