import mongoose from "mongoose";

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const querySchema = new mongoose.Schema({
  email: String,
  query: String,
  date: { type: String, default: formatDate(new Date()) },
  solved: { type: Boolean, default: false },
});


querySchema.pre('save', function(next) {
  this.date = formatDate(new Date());
  next();
});


querySchema.methods.getFormattedDate = function() {
  return this.date;
};

export const Query = mongoose.models.queries || mongoose.model("queries", querySchema);
