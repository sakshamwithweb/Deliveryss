import MyImage2 from "./img2";
const Promote = () => {
  return (
    <div className="main flex" id="promote">
      <div className="w-[50vw] text-center border border-black">
        <div className="">
          <h1
            className="text-4xl font-[600] mb-7 text-center flex items-center justify-center"
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Why DELIVERY?
          </h1>
        </div>
        <div className="stat border border-black">
          <h4
            className="text-bold text-2xl font-[700] "
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            2.1 Bn+
          </h4>
          <p
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Parcels shipped since inception
          </p>
        </div>
        <div className="stat border border-black">
          <h4
            className="text-bold text-2xl font-[700]"
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            99.5%
          </h4>
          <p
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Indian population covered
          </p>
        </div>
        <div className="stat border border-black">
          <h4
            className="text-bold text-2xl font-[700]"
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            30K+
          </h4>
          <p
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Businesses served
          </p>
        </div>
        <div className="stat border border-black">
          <h4
            className="text-bold text-2xl font-[700]"
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            3.4 Mn+
          </h4>
          <p
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Tonnes Freight shipped
          </p>
        </div>
        <div className="stat border border-black">
          <h4
            className="text-bold text-2xl font-[700]"
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            18 Mn+
          </h4>
          <p
            style={{
              userSelect: "none",
              MozUserSelect: "none",
              WebkitUserSelect: "none",
              msUserSelect: "none",
            }}
          >
            Square feet logistics infrastructure covered
          </p>
        </div>
      </div>
      <div className="w-[50vw] flex items-center">
        <MyImage2 />
      </div>
    </div>
  );
};

export default Promote;
