"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RequestOtpSignUp = ({ setFormSuccess, Email }) => {
  if (Email != null && Email == "" && Email == undefined) {
    alert("hey", Email);
  }
  const [email, setEmail] = useState(Email);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/generate-otp-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (data.error) {
      toast.error(data.error); // Display error message
    } else {
      toast.success(data.message); // Display success message
      setIsOtpSent(true);
    }
    setLoading(false);
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    });
    const data = await response.json();
    if (data.error) {
      toast.error(data.error); // Display error message
    } else {
      toast.success(data.message); // Display success message
      setFormSuccess(true);
    }
    setLoading(false);
  };

  return (
    <div>
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Typography
          style={{
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
          variant="h4"
          gutterBottom
        >
          OTP Verification
        </Typography>
        <Box
          component="form"
          onSubmit={isOtpSent ? handleVerifyOtp : handleRequestOtp}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            defaultValue={email}
            InputProps={{ readOnly: true }}
            fullWidth
          />
          {isOtpSent && (
            <TextField
              label="OTP"
              variant="outlined"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              fullWidth
            />
          )}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} />
            ) : isOtpSent ? (
              "Verify OTP"
            ) : (
              "Request OTP"
            )}
          </Button>
          {message && (
            <Alert
              severity={error ? "error" : "success"}
              style={{
                userSelect: "none",
                MozUserSelect: "none",
                WebkitUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              {message}
            </Alert>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default RequestOtpSignUp;
