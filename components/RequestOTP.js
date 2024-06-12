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
import { ToastContainer,Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OTPForm = ({ Email, onOtpVerified }) => {
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

    const response = await fetch("/api/generate-otp-track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      setIsOtpSent(true);
    }
    setMessage(data.message || data.error);
    setError(!!data.error);
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
    setMessage(data.message || data.error);
    setError(!!data.error);
    setLoading(false);

    // Add toast notifications
    if (data.message) {
      toast.success(data.message); // Success message
    } else if (data.error) {
      toast.error(data.error); // Error message
    }

    if (data.message && onOtpVerified) {
      await onOtpVerified();
    }
  };

  return (
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
      </Box>
    </Box>
  );
};

export default OTPForm;
