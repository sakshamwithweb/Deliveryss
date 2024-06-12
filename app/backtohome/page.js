"use client";
import Footer from "@/components/footer";
import Header from "@/components/withoutLoginHeader";
import MyImage3 from "@/components/img3";
import MyImage4 from "@/components/img4";
//nacho bhai
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import RequestOtpSignUp from "@/components/RequestOtpSignUp";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const [name, setName] = useState("");
  const [agree, setAgree] = useState(false);
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("");
  const [states, setStates] = useState("");
  const [existError, setExistError] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [errorUser, setErrorUser] = useState(false);
  const [otp, setOtp] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  
  useEffect(()=>{
    setEmail('')
    setPassword('')
    setName('')
    setAgree(false)
    setShow(false)
    setCountry('')
    setStates('')
  },[login])
  //Provide google,microsoft and githup provider too check to databasewhether really user is there or not if yes so push to /user where there data will be stored in localstorage or else show error and redirect to SignUp"

  //under loginSubmitAction fetch success value then store in success state

  let ref = useRef();
  let router = useRouter();


  useEffect(() => {
    const data = localStorage.getItem("email");
    if (data != null) {
      router.push("/");
      alert("wow");
    }
  }, []);

  const loginSubmitAction = async (event) => {
    event.preventDefault();
  
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
  
    const data = await response.json();
    if (data.success) {
      if (data.foundUser) {
        setSuccess(true);
        localStorage.setItem("email", email);
        router.push("/");
        toast.success("Login successful!");
      } else {
        setUserNotFound(true);
        toast.error("User not found!");
      }
    } else {
      setErrorUser(true);
      toast.error("Error logging in!");
    }
  };
  
  const signUpSubmitAction = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/checksignin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      const data = await response.json();
      if (!data.exist) {
        setOtp(true);
      } else if (data.exist) {
        setExistError(true);
        toast.error("User already exists!");
      }
    } catch (error) {
      console.log("error is:", error);
      toast.error("Error checking user existence!");
    }
  };
  
 
  useEffect(() => {
    const func1 = async () => {
      try {
        if (
          email != null &&
          password != null &&
          country != null &&
          name != null &&
          states != null
        ) {
          const response = await fetch("/api/signin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
              country: country,
              name: name,
              states: states,
            }),
          });
          const data = await response.json();
          if (!data.exist) {
            localStorage.setItem("email", email);
            router.push("/");
            toast.success("Signup successful!");
          }
        } else {
          console.log({ email, password, country, name, states });
        }
      } catch (error) {
        console.log("error is:", error);
        toast.error("Error signing up!");
      }
    };
    if (formSuccess) {
      func1();
    }
  }, [formSuccess]);
  
  useEffect(() => {
    const func = async () => {
      try {
        let response = await fetch("api/countrystate");
        let dataoffetch = await response.json();
        setData(dataoffetch);
      } catch (error) {
        toast.error("Error fetching country and state data!");
        return;
      }
    };
    func();
  }, []);
  
  {
    login
      ? useEffect(() => {
          if (email === "" || password.length < 6) {
            setErr(true);
          } else {
            setErr(false);
          }
        }, [email, password])
      : useEffect(() => {
          if (
            email === "" ||
            password.length < 6 ||
            country === "" ||
            name.length < 2 ||
            states == "" ||
            !agree
          ) {
            setErr(true);
          } else {
            setErr(false);
          }
        }, [email, password, country, name, states, agree]);
  }

  useEffect(() => {
    const func = async () => {
      try {
        let response = await fetch("api/countrystate");
        let dataoffetch = await response.json();
        setData(dataoffetch);
      } catch (error) {
        alert("oh");
        return;
      }
    };
    func();
  }, []);

  return (
    <>
     
      {otp ? (
        <RequestOtpSignUp setFormSuccess={setFormSuccess} Email={email} />
      ) : (
        <>
          {" "}
          {login ? (
            <div className="justify-center flex-col flex min-h-[100vh] items-center creem">
              <div className="absolute top-0 w-full">
                <Header />
              </div>
              <form
                ref={ref}
                onSubmit={(event) => {
                  loginSubmitAction(event);
                  ref.current.reset();
                }}
                className="flex justify-center min-w-[310px] relative items-center min-h-[400px] border border-black flex-col"
              >
                <h1
                  className="text-3xl absolute top-[10px] font-bold"
                  style={{
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                  }}
                >
                  Login
                </h1>
             
                <div>
                  <label
                    htmlFor="email"
                    className="mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Email
                  </label>
                  <input
                    className="mb-[20px] w-[200px] rounded-2xl border border-black"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex h-7 mt-[5px] w-[254px] justify-center items-center relative">
                  <label
                    htmlFor="password"
                    className="w-[30%] mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Password
                  </label>
                  <input
                    className="h-[100%] w-[75%] rounded-l-full border border-black"
                    type={show ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="w-[15%] flex justify-center items-center h-[100%] border border-black rounded-r-full"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    {show ? <MyImage3 /> : <MyImage4 />}
                  </div>
                </div>
                <button
                  onClick={() => {}}
                  className="m-[20px] border ns border-black h-10 w-24 rounded-full"
                  type="submit"
                  disabled={err}
                >
                  Login
                </button>
                {err ? (
                  <h1
                    className="text-red-700 flex justify-center text-bold text-1xl font-[900]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    All fields are required
                  </h1>
                ) : (
                  <h1
                    className="text-green-500 flex justify-center text-bold text-1xl font-[900]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    All fields are required
                  </h1>
                )}
              </form>
              <div
                onClick={() => setLogin(!login)}
                style={{
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                Don't Have a Account? Sign In
              </div>
              <div className="absolute bottom-0 w-full">
                <Footer />
              </div>
            </div>
          ) : (
            <div className="justify-center flex-col flex min-h-[120vh] items-center creem">
              <div className="absolute top-0 w-full">
                <Header />
              </div>
              <form
                ref={ref}
                onSubmit={(event) => {
                  signUpSubmitAction(event);
                  ref.current.reset();
                }}
                className="flex justify-center min-w-[310px] relative items-center min-h-[500px] border border-black flex-col"
              >
                <h1
                  className="text-3xl absolute top-[10px] font-bold"
                  style={{
                    userSelect: "none",
                    MozUserSelect: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                  }}
                >
                  SignIn
                </h1>
                <div>
                  <label
                    htmlFor="name"
                    className="mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Name
                  </label>
                  <input
                    className="mb-[20px] w-[200px] rounded-2xl border border-black"
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Email
                  </label>
                  <input
                    className="mb-[20px] w-[200px] rounded-2xl border border-black"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Country
                  </label>
                  <select
                    value={country}
                    className="mb-[20px] w-[180px] rounded-2xl border border-black"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  >
                    {data.length > 0 &&
                      data.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    State
                  </label>
                  <select
                    value={states}
                    className="mb-[20px] w-[200px] rounded-2xl border border-black"
                    onChange={(e) => setStates(e.target.value)}
                  >
                    {country &&
                      data
                        .find((item) => item.name === country)
                        ?.states.map((state) => (
                          <option key={state.state_code} value={state.name}>
                            {state.name}
                          </option>
                        ))}
                  </select>
                </div>
                <div className="flex h-7 mt-[1px] mb-3 w-[254px] justify-center items-center relative">
                  <label
                    htmlFor="password"
                    className="w-[30%] mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    Password
                  </label>
                  <input
                    className="h-[100%] w-[75%] rounded-l-full border border-black"
                    type={show ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="w-[15%] flex justify-center items-center h-[100%] border border-black rounded-r-full"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    {show ? <MyImage3 /> : <MyImage4 />}
                  </div>
                </div>
                <div className="flex h-7 mt-[5px] w-[254px] justify-center items-center relative">
                  <label
                    htmlFor="email"
                    className="mr-3 text-center text-[15px] font-[700]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    <span>Agree With All</span>
                    <span
                      className="cursor-pointer text-blue-500"
                      onClick={() => {
                        router.push("/term_condition");
                      }}
                    >
                      {" "}
                      Terms & Condition
                    </span>
                  </label>

                  <input
                    type="checkbox"
                    name="agree"
                    value={agree}
                    onChange={() => {
                      setAgree(!agree);
                    }}
                  />
                </div>

                <button
                  className="m-[20px] border border-black ns h-10 w-24 rounded-full"
                  type="submit"
                  disabled={err}
                >
                  SignIn
                </button>
                {err ? (
                  <h1
                    className="text-red-700 flex justify-center text-bold text-1xl font-[900]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    All fields are required
                  </h1>
                ) : (
                  <h1
                    className="text-green-500 flex justify-center text-bold text-1xl font-[900]"
                    style={{
                      userSelect: "none",
                      MozUserSelect: "none",
                      WebkitUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  >
                    All fields are required
                  </h1>
                )}
              </form>
              <div
                onClick={() => setLogin(!login)}
                style={{
                  userSelect: "none",
                  MozUserSelect: "none",
                  WebkitUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                Have a Account? Login
              </div>
              <div className="absolute top-[150vh] w-full">
                <Footer />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
