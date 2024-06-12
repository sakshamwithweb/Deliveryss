import { sendOTP } from '../../../lib/nodemailerTrack';

export async function POST(req) {
  const { email } = await req.json();
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save OTP and email in session or database (for simplicity, using a global variable here)
  global.otpStore = { email, otp };
  try {
    await sendOTP(email, otp);
    return new Response(JSON.stringify({ message: 'OTP sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send OTP' }), { status: 500 });
  }
}