import { useEffect } from "react";

function MyImage2() {
  useEffect(() => {
    const img = new Image();
    img.src = "/delivery.avif";
  }, []);

  return (
    <img
      style={{
        width: "99%",
        height: "99%",
        opacity: 0.5,
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
      src="/delivery.avif"
      alt="Delivery Track"
    />
  );
}

export default MyImage2;
