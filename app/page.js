"use client";
import { useEffect, useState } from "react";
import Header from "@/components/withoutLoginHeader";
import Footer from "@/components/footer";
import MyImage from "@/components/img1";
import Banner from "@/components/banner";
import Promote from "@/components/promote";
import Line from "@/components/line";
import Support from "@/components/support";
import WithLoginHeader from "@/components/withLoginHeader";
import MyImage5 from "@/components/img5";
import TrackAShip from "@/components/trackaship";
import OTPForm from "@/components/RequestOTP";
import Tracked from "@/components/trackedList";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailForOtp, setEmailForOtp] = useState("");
  const [pic, setPic] = useState("");
  const [otp, setOtp] = useState(false);
  const [tracked, setTracked] = useState(false);
  const [trackedData, setTrackedData] = useState([]);
  //here extract contry short cut then store here then give to trackaship to check weather user is serching for its country or not
  const [countryForDomesticShip, setCountryForDomesticShip] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("email");
    if (data) {
      setEmail(data);
      const logFunc = async () => {
        setLoggedIn(true);
        const response = await fetch("/api/fetchInfos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data }),
        });
        const myData = await response.json();
        setName(myData.name);
        setPic(myData.pic);
      };
      logFunc();
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleOtpVerified = async () => {
    const response = await fetch("/api/fetchTracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailForOtp }),
    });
    const data = await response.json();

    if (data.success) {
      setTracked(true);
      setTrackedData(data.tracks);
    } else {
      console.error("Error fetching tracking data");
    }
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <WithLoginHeader name={name} email={email} pic={pic} />
          <main className="for_footer creem">
            <div className="banner1 relative cursor-default">
              <MyImage5 />
              <div className="justify-center flex items-center w-[100%] h-[100%] z-10 absolute top-1">
                {otp ? (
                  <>
                    {tracked ? (
                      <Tracked data={trackedData} />
                    ) : (
                      <OTPForm
                        Email={emailForOtp}
                        onOtpVerified={handleOtpVerified}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <TrackAShip
                      setEmailForOtp={setEmailForOtp}
                      setOtp={setOtp}
                      email={email}
                    />
                  </>
                )}
              </div>
            </div>
          </main>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <main className="for_footer creem">
            <div className="banner">
              <MyImage />
              <Banner />
            </div>
            <div className="w-[100vw]">
              <Line />
            </div>
            <div>
              <Promote />
            </div>
            <div className="w-[100vw]">
              <Line />
            </div>
            <div className="w-[100vw]">
              <Support />
            </div>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
