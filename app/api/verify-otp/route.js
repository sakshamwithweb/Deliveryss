export async function POST(req) {
    const { email, otp } = await req.json();
  
    if (global.otpStore && global.otpStore.email === email && global.otpStore.otp === otp) {
      return new Response(JSON.stringify({ message: 'OTP verified successfully' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid OTP' }), { status: 400 });
    }
  }
  