import crypto from "crypto";
import { NextResponse } from "next/server";

const generatedSignature = (razorpayOrderId, razorpayPaymentId) => {
  const keySecret = process.env.KEY_SECRET;
  if (!keySecret) {
    throw new Error(
      "Razorpay key secret is not defined in environment variables."
    );
  }
  const sig = crypto
    .createHmac("sha256", keySecret)
    .update(razorpayOrderId + "|" + razorpayPaymentId)
    .digest("hex");
  return sig;
};

export async function POST(request) {
  try {
    const { orderCreationId, razorpayPaymentId, razorpaySignature } = await request.json();

    const signature = generatedSignature(orderCreationId, razorpayPaymentId);
    
    // Compare signatures in a case-insensitive manner
    if (signature.toLowerCase() !== razorpaySignature.toLowerCase()) {
      return NextResponse.json({
        message: "Payment verification failed",
        isOk: false,
      });
    }

    return NextResponse.json({
      message: "Payment verified successfully",
      isOk: true,
    });
  } catch (error) {
    console.error("Error verifying payment:", error.message);
    return NextResponse.json({
      message: "Internal server error",
      isOk: false,
    });
  }
}
