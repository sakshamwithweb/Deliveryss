import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  password: { type: String, required: true },
  name:{ type: String, required: true },
  country:{ type: String, required: true },
  state:{ type: String, required: true },
  date: { type: Date, default: Date.now },
  image: { type: String, default: "https://i.ibb.co/gV5mzLz/user2.png" },
});

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);
