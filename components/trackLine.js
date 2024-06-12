import React, { useEffect, useState } from "react";

const TrackLine = ({ percent,phoneNumberDeliveryBoy }) => {
  const [call, setCall] = useState(false);
 
  useEffect(() => {
    const dynamicCSS = `
            @keyframes grow {
                from {
                    height: 0%;
                }
                to {
                    height: ${percent}%;
                }
            }

            @keyframes pulse {
                0%, 100% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.5);
                }
            }

            .pulse {
                animation: pulse 1.5s infinite;
            }
        `;

    // Create a style element to inject dynamic CSS
    const styleElement = document.createElement("style");
    styleElement.innerHTML = dynamicCSS;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [percent]);

  const milestones = [
    { label: "Delivered", percent: 100 },
    { label: "Out for Delivery", percent: 75 },
    { label: "Shipped", percent: 50 },
    { label: "Order Placed", percent: 25 },
  ];

  const milestoneWithWow = milestones.map((milestone, index) => {
    if (milestone.percent === 75 && percent >= 75 && percent < 100) {
      return (
        <div
          className="relative"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
          key={index}
        >
          <div className="w-3 h-3 bg-black rounded-full"></div>
          <div className="absolute left-full ml-2 text-xs font-bold">
            {milestone.label}
          </div>
          <button
            className="absolute right-full mr-2 text-[9px] font-bold border border-black rounded-2xl p-1 bg-inherit cursor-pointer"
            style={{ whiteSpace: "nowrap" }} onClick={()=>{setCall(true)}}
          >
            {call ? phoneNumberDeliveryBoy : "Call Delivery Boy!"}
          </button>
        </div>
      );
    } else {
      return (
        <div
          className="relative"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
          key={index}
        >
          <div
            className={`w-3 h-3 bg-black rounded-full ${
              percent < milestone.percent ? "pulse" : ""
            }`}
          ></div>
          <div className="absolute left-full ml-2 text-xs font-bold">
            {milestone.label}
          </div>
        </div>
      );
    }
  });

  return (
    <div className="relative border border-black w-2 rounded-full h-[65vh]">
      <div
        className="absolute bottom-0 w-[100%] bg-blue-300 animated-bar"
        style={{
          height: `${percent}%`,
          transition: "height 5s ease-in-out",
        }}
      ></div>
      <div className="absolute w-full h-full flex flex-col justify-between items-center cursor-default" style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}>
        {milestoneWithWow}
      </div>
    </div>
  );
};

export default TrackLine;
