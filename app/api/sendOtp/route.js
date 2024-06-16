import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const { email,name,orderID } = data;

  // Create a nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject:
      "Thank You for Choosing Deliveryss 🚚! Your Shipment Request Has Been Received",
    text: `Dear ${name},\n\nThank you for choosing Deliveryss for your shipping needs. We have received your shipment request with Order ID: ${orderID}. Your query is being processed with care.\n\nIf you did not initiate this request, please visit https://www.deliveryss.com/#support and submit a complaint.\n\nBest regards,\nDeliveryss Team`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("MAze Maze", email);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to send OTP email",
    });
  }
}
