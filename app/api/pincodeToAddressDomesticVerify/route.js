import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const { dual } = payload;
  if (dual) {
    const { d1, d2 } = payload;
    if (!d1 || !d2) {
      return NextResponse.json({ success: false });
    }
    try {
      const response = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=${process.env.API_POSTEL_CODE}&codes=${d1},${d2}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const results = data.results;

      return NextResponse.json({ success: true, result: results });
    } catch (error) {
      return NextResponse.json({ success: false });
    }
  } else if (!dual) {
    const { pincode } = payload;
    if (!pincode) {
      return NextResponse.json({ success: false });
    }
    try {
      const response = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=${process.env.API_POSTEL_CODE}&codes=${pincode}`
      );
      if (!response.ok) {
        console.log("Network response was not ok");
      }
      const data = await response.json();
      const results = data.results;
      return NextResponse.json({ success: true, result: results });
    } catch (error) {
      return NextResponse.json({ success: false });
    }
  }
}
