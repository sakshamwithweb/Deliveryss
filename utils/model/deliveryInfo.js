import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  phoneNo: {
    type: String,
    required: true,
  },
  deliveryPartnerPhoneNumber: {
    type: String,
    default: "None",
  },
  completePercent: {
    type: Number,
    default: 25,
  },
  product_name: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  receiver_number: {
    type: String,
    required: true,
  },
  receiver_email: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  order_Id: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    default: "Order Placed",
  },
  delivered_date: {
    type: String,
    required: true,
  },
  sent_from: {
    type: Object,
    required: true,
  },
  received_address: {
    type: Object,
    required: true,
  },
  sent_date: {
    type: Date,
    default: Date.now, // Updated to use Date.now for default value
  },
  package_content_Size_Package: {
    type: Array,
  },
  price: {
    type: Number,
    required: true,
  },
  verification_type: {
    type: String,
  },
  verification_number: {
    type: String,
  },
});

export const Tracks =
  mongoose.models.tracks || mongoose.model("tracks", trackSchema);
