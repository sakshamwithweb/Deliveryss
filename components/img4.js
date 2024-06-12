import { useEffect } from "react";

function MyImage4() {
  useEffect(() => {
    const img = new Image();
    img.src = "/hidden.png";
  }, []);

  return (
    <img
      style={{
        width: "60%",
        height: "60%",
        opacity: 0.5,
        userSelect: "none",
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none",
      }}
      src="/hidden.png"
      alt="Hidden IMG"
    />
  );
}

export default MyImage4;
