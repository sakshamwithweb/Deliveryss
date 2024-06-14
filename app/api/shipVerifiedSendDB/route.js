// Import necessary modules and dependencies
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/utils/db";
import { Tracks } from "@/utils/model/deliveryInfo";

// Define the POST handler function
export async function POST(request) {
  const payload = await request.json();
  const { round1Data, round2Data, round3Data, round4Data, uniqueOrderId } =
    payload;

  try {
    // Validate all required fields are not null or empty
    const requiredFields = [
      round1Data.pickupMobileNo,
      round2Data.packageName,
      round1Data.pickupContactName,
      round1Data.pickupEmail,
      round1Data.DeliverContactName,
      round1Data.DeliverMobileNo,
      round1Data.DeliverEmail,
      uniqueOrderId,
      round3Data,
      round1Data.selectedSuggestPickupPinCodeDomestic,
      round1Data.selectedSuggestPickupCityDomestic,
      round1Data.selectedSuggestPickupStateDomestic,
      round1Data.pickupFlatNumber,
      round1Data.pickupStreet,
      round1Data.selectedSuggestDeliverPinCodeDomestic,
      round1Data.selectedSuggestDeliverCityDomestic,
      round1Data.selectedSuggestDeliverStateDomestic,
      round1Data.DeliverFlatNumber,
      round1Data.DeliverStreet,
      round2Data.describePackageContent,
      round2Data.packageSize,
      round2Data.describeYourPackage,
      round4Data.Document,
      round4Data.Id,
    ];

    for (let field of requiredFields) {
      if (
        field === null ||
        field === "" ||
        (typeof field === "number" && isNaN(field)) ||
        (Array.isArray(field) && field.length === 0) ||
        (typeof field === "object" && Object.keys(field).length === 0)
      ) {
        console.error("Required field is null, empty, or invalid:", field);
        return NextResponse.json({
          success: false,
          error: "Required field is null, empty, or invalid.",
        });
      }
    }

    // Connect to MongoDB
    await mongoose.connect(connectionStr);

    // Create a new Tracks document
    const track = new Tracks({
      phoneNo: round1Data.pickupMobileNo,
      product_name: round2Data.packageName,
      sender: round1Data.pickupContactName,
      email: round1Data.pickupEmail,
      receiver: round1Data.DeliverContactName,
      receiver_number: round1Data.DeliverMobileNo,
      receiver_email: round1Data.DeliverEmail,
      order_Id: uniqueOrderId,
      delivered_date: `${round3Data.day} ${round3Data.date} ${round3Data.month} `, // Assuming round3Data is a date string or number
      sent_from: {
        pincode: round1Data.selectedSuggestPickupPinCodeDomestic,
        city: round1Data.selectedSuggestPickupCityDomestic,
        state: round1Data.selectedSuggestPickupStateDomestic,
        flat_name: round1Data.pickupFlatNumber,
        street: round1Data.pickupStreet,
      },
      received_address: {
        pincode: round1Data.selectedSuggestDeliverPinCodeDomestic,
        city: round1Data.selectedSuggestDeliverCityDomestic,
        state: round1Data.selectedSuggestDeliverStateDomestic,
        flat_name: round1Data.DeliverFlatNumber,
        street: round1Data.DeliverStreet,
      },
      package_content_Size_Package: [
        round2Data.describePackageContent,
        round2Data.packageSize,
        round2Data.describeYourPackage,
      ],
      price: round2Data.insurancePrice + round2Data.deliveryPrice,
      verification_type: round4Data.Document,
      verification_number: round4Data.Id,
    });

    // Save the track document
    const result = await track.save();

    // Close MongoDB connection
    await mongoose.connection.close();

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    // Handle errors
    console.error("Error saving track:", error);
    return NextResponse.json({ success: false, error: "Error saving track." });
  }
}
