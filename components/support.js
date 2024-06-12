import React, { useRef, useState, useEffect } from "react";
import { toast, ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Thanks_support from "./thanks_support";
import SystemError from "./systemError";

const Support = () => {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ref = useRef();

  const submitAction = async (event) => {
    event.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setLoading(true);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, query, solved: false }),
      });
      const data = await response.json();

      if (data.success) {
        toast.success("Your query has been submitted successfully!");
      } else {
        toast.error("There was a problem submitting your query. Please try again later.");
      }
    } catch (error) {
      toast.error("There was a problem submitting your query. Please try again later.");
    } finally {
      setEmail("");
      setQuery("");
      setLoading(false);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (email === "" || query === "") {
      setErr(true);
    } else {
      setErr(false);
    }
  }, [email, query]);

  return (
    <div className="flex flex-col items-center content-center min-h-[70vh]" id="support">
     
      {loading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
      <div className="h-[10%]">
        <h1
          className="flex justify-center text-bold text-3xl font-[700]"
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          Support
        </h1>
      </div>
      <div className="mt-[95px] w-[100%] h-[90%] flex flex-col justify-center items-center">
        <h1
          className={`flex justify-center text-bold text-1xl font-[${err ? "900" : "500"}] ${
            err ? "text-red-700" : ""
          }`}
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          All fields are required
        </h1>
        <form
          ref={ref}
          onSubmit={(event) => {
            submitAction(event);
            ref.current.reset();
          }}
          className="border m-[30px] border-black flex flex-col items-center"
        >
          <div className="p-[14px]">
            <label
              className=""
              htmlFor="email"
              style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              Email*
            </label>
            <input
              className="mx-[5px] rounded-2xl border border-black"
              type="email"
              name="email"
              placeholder="Enter Email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative m-left">
            <label
              className="absolute left-[10px]"
              htmlFor="message"
              style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              Query*
            </label>
            <textarea
              className="mx-[67px] rounded-2xl w-[221px] border border-black"
              type="text"
              name="message"
              placeholder="Enter Your Query Here"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <button
            disabled={err}
            className="m-[20px] ns border border-black h-10 w-24 rounded-full"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
