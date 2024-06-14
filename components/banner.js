import Link from "next/link";

const Banner = () => {
  return (
    <div className="z-2 absolute top-[26%] text-white text-center gap-5 w-[100vw]">
      <h1
        className="mb-8 text-7xl font-bold"
        style={{
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        {process.env.NAME}
      </h1>
      <p
        className="text-3xl font-[600] mb-7"
        style={{
          userSelect: "none",
          MozUserSelect: "none",
          WebkitUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        Delivering Delight, One Order at a Time
      </p>
      <div className="flex w-[100vw] justify-center gap-[45px]">
        <div>
          <Link href="/backtohome" passHref>
            <button className="p-2 border rounded-full border-white w-full text-center">
              Get Started - &gt;
            </button>
          </Link>
        </div>
        <div>
          <Link href="#support" passHref>
            <button className="p-2 border rounded-full border-white w-full text-center">
              Want Help?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
