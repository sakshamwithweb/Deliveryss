import React, { useState, useEffect } from "react";

const Footer = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setTime(currentYear);
  }, []);

  return (
    <div
      className="bg-slate-200 text-center"
      style={{
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      All rights reserved &copy; {time}
    </div>
  );
};

export default Footer;
