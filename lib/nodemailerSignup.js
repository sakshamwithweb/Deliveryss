import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOTP = (email, otp) => {
  const subject = "🚚 Your Secure Delivery Register OTP is Here!";
  const description = `Hello there!\n\nYour seamless delivery experience with Deliveryss is just a step away!. Your secure otp is ${otp}\n\n🛡️ Your Security is Our Priority...\n\nHaven't requested this OTP? Reach out to our dedicated support team immediately.\n\nLet's deliver excellence together!\n\nWarm regards,\nThe Deliveryss Team`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    text: description,
  };

  console.log("otp is(Sigup)", otp);

  return transporter.sendMail(mailOptions);
};
