import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import TrackLine from "./trackLine";
import MyImage6 from "./img6";

const MoreInfoTrack = ({
  percent,
  title,
  phoneNumberDeliveryBoy,
  orderDetails,
}) => {

  const truncateTitle = (title) => {
    if (!title) return "";
    return title.length > 40 ? `${title.slice(0, 40)}...` : title;
  };

  const {
    phoneNo,
    product_name,
    sender,
    email,
    order_Id,
    status,
    delivered_date,
    sent_from,
    received_address,
    sent_date,
  } = orderDetails;

  const downloadPDF = async () => {
    const element = document.getElementById("order-details");
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Deliveryss_Order_Details.pdf");
  };

  return (
    <div className="flex justify-around items-center">
      <div className="mr-[200px]">
        <TrackLine
          percent={percent}
          phoneNumberDeliveryBoy={phoneNumberDeliveryBoy}
        />
      </div>
      <div className="bg-white h-auto w-[40vw] flex flex-col justify-center items-center mt-8 p-6 rounded-lg shadow-lg">
        <div className="w-full flex justify-between items-center mb-4">
          <h1
            className="text-2xl font-bold text-gray-800 text-center border-b-2 border-black"
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Order Details
          </h1>
          <button onClick={downloadPDF} className="h-14 w-14">
            <MyImage6 />
          </button>
        </div>
        <div id="order-details" className="w-full flex flex-col items-start">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Product Information</h2>
            <p>Product Name: {truncateTitle(product_name)}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Order Information</h2>
            <p>Order ID: {order_Id}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Sender Information</h2>
            <p>Sender: {sender}</p>
            <p>Email: {email}</p>
            <p>Phone No: {phoneNo}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <p>Sent From: {sent_from}</p>
            <p>Received Address: {received_address}</p>
            <p>Sent Date: {new Date(sent_date).toLocaleDateString()}</p>
            <p>
              Estimated Delivery Date:{" "}
              {new Date(delivered_date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoTrack;
