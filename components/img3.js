import { useEffect } from "react";

function MyImage3() {
  useEffect(() => {
    const img = new Image();
    img.src = "/eye.png";
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
      src="/eye.png"
      alt="Show IMG"
    />
  );
}

export default MyImage3;
