import React from "react";

const Exist = () => {
  return (
    <div
      className="t-s text-xl text-red-500 text-center"
      style={{
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      You already have a account.
    </div>
  );
};

export default Exist;
