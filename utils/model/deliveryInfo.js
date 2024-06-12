import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  phoneNo: {
    type: Number,
    required: true,
  },
  deliveryPartnerPhoneNumber: {
    type: String,
  },
  completePercent: {
    type: Number,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
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
    required: true,
  },                                                      
  delivered_date: {
    type: Date,
    required: true,
  },
  sent_from: {
    type: String,
    required: true,
  },
  received_address: {
    type: String,
    required: true,
  },
  sent_date: {
    type: String,
    default: new Date(),
  },
});

export const Tracks =
  mongoose.models.tracks || mongoose.model("tracks", trackSchema);
