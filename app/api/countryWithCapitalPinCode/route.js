import { NextResponse } from "next/server";

export async function POST(request) {
  const data = {
    Afghanistan: { postalCode: "1001", iso2: "AF" },
    Albania: { postalCode: "1001", iso2: "AL" },
    Algeria: { postalCode: "16000", iso2: "DZ" },
    Andorra: { postalCode: "AD100", iso2: "AD" },
    Angola: { postalCode: "1633", iso2: "AO" },
    Argentina: { postalCode: "C1002ABC", iso2: "AR" },
    Armenia: { postalCode: "0010", iso2: "AM" },
    Australia: { postalCode: "2000", iso2: "AU" },
    Austria: { postalCode: "1010", iso2: "AT" },
    Azerbaijan: { postalCode: "AZ1000", iso2: "AZ" },
    Bahrain: { postalCode: "199", iso2: "BH" },
    Bangladesh: { postalCode: "1212", iso2: "BD" },
    Barbados: { postalCode: "BB11000", iso2: "BB" },
    Belarus: { postalCode: "220004", iso2: "BY" },
    Belgium: { postalCode: "1000", iso2: "BE" },
    Benin: { postalCode: "01 BP 0879", iso2: "BJ" },
    Bhutan: { postalCode: "11001", iso2: "BT" },
    Bolivia: { postalCode: "591", iso2: "BO" },
    "Bosnia and Herzegovina": { postalCode: "71000", iso2: "BA" },
    Brazil: { postalCode: "20040-900", iso2: "BR" },
    Bulgaria: { postalCode: "1000", iso2: "BG" },
    "Burkina Faso": { postalCode: "01 BP 1300", iso2: "BF" },
    Cambodia: { postalCode: "12202", iso2: "KH" },
    Cameroon: { postalCode: "1001", iso2: "CM" },
    Canada: { postalCode: "M5V 2H1", iso2: "CA" },
    Chile: { postalCode: "8340518", iso2: "CL" },
    China: { postalCode: "100000", iso2: "CN" },
    Colombia: { postalCode: "110231", iso2: "CO" },
    "Costa Rica": { postalCode: "10101", iso2: "CR" },
    Croatia: { postalCode: "10000", iso2: "HR" },
    Cuba: { postalCode: "10100", iso2: "CU" },
    Cyprus: { postalCode: "1016", iso2: "CY" },
    "Czech Republic": { postalCode: "110 00", iso2: "CZ" },
    Denmark: { postalCode: "1050", iso2: "DK" },
    "Dominican Republic": { postalCode: "10104", iso2: "DO" },
    Ecuador: { postalCode: "EC170150", iso2: "EC" },
    Egypt: { postalCode: "11511", iso2: "EG" },
    "El Salvador": { postalCode: "CP 1101", iso2: "SV" },
    Estonia: { postalCode: "10120", iso2: "EE" },
    Finland: { postalCode: "00100", iso2: "FI" },
    France: { postalCode: "75001", iso2: "FR" },
    Georgia: { postalCode: "0105", iso2: "GE" },
    Germany: { postalCode: "10178", iso2: "DE" },
    Ghana: { postalCode: "GA19", iso2: "GH" },
    Greece: { postalCode: "105 63", iso2: "GR" },
    Guatemala: { postalCode: "01001", iso2: "GT" },
    Haiti: { postalCode: "HT 6110", iso2: "HT" },
    Hungary: { postalCode: "1011", iso2: "HU" },
    Iceland: { postalCode: "101", iso2: "IS" },
    India: { postalCode: "110001", iso2: "IN" },
    Indonesia: { postalCode: "12110", iso2: "ID" },
    Iran: { postalCode: "1418855838", iso2: "IR" },
    Iraq: { postalCode: "10001", iso2: "IQ" },
    Ireland: { postalCode: "D01 F5P2", iso2: "IE" },
    Israel: { postalCode: "91999", iso2: "IL" },
    Italy: { postalCode: "00184", iso2: "IT" },
    "Ivory Coast": { postalCode: "01 BP 3765", iso2: "CI" },
    Japan: { postalCode: "100-0001", iso2: "JP" },
    Jordan: { postalCode: "11110", iso2: "JO" },
    Kazakhstan: { postalCode: "010000", iso2: "KZ" },
    Kenya: { postalCode: "00100", iso2: "KE" },
    Kosovo: { postalCode: "10000", iso2: "XK" },
    Kuwait: { postalCode: "13001", iso2: "KW" },
    Kyrgyzstan: { postalCode: "720000", iso2: "KG" },
    Laos: { postalCode: "01001", iso2: "LA" },
    Latvia: { postalCode: "LV-1050", iso2: "LV" },
    Liechtenstein: { postalCode: "9490", iso2: "LI" },
    Lithuania: { postalCode: "LT-01129", iso2: "LT" },
    Luxembourg: { postalCode: "L-2920", iso2: "LU" },
    Malaysia: { postalCode: "50450", iso2: "MY" },
    Mexico: { postalCode: "01000", iso2: "MX" },
    Moldova: { postalCode: "MD-2012", iso2: "MD" },
    Monaco: { postalCode: "98000", iso2: "MC" },
    Mongolia: { postalCode: "210648", iso2: "MN" },
    Montenegro: { postalCode: "81000", iso2: "ME" },
    Morocco: { postalCode: "90000", iso2: "MA" },
    "Myanmar (Burma)": { postalCode: "11181", iso2: "MM" },
    Nepal: { postalCode: "44600", iso2: "NP" },
    Netherlands: { postalCode: "1012 JS", iso2: "NL" },
    "New Zealand": { postalCode: "6011", iso2: "NZ" },
    Nigeria: { postalCode: "110001", iso2: "NG" },
    "North Macedonia": { postalCode: "1000", iso2: "MK" },
    Norway: { postalCode: "0010", iso2: "NO" },
    Pakistan: { postalCode: "44000", iso2: "PK" },
    Paraguay: { postalCode: "1502", iso2: "PY" },
    Peru: { postalCode: "15046", iso2: "PE" },
    Philippines: { postalCode: "1000", iso2: "PH" },
    Poland: { postalCode: "00-001", iso2: "PL" },
    Portugal: { postalCode: "1100-585", iso2: "PT" },
    Qatar: { postalCode: "000000", iso2: "QA" },
    Romania: { postalCode: "050882", iso2: "RO" },
    Russia: { postalCode: "101000", iso2: "RU" },
    "Saint Marino": { postalCode: "47890", iso2: "SM" },
    "Saudi Arabia": { postalCode: "11564", iso2: "SA" },
    Serbia: { postalCode: "11000", iso2: "RS" },
    Singapore: { postalCode: "179098", iso2: "SG" },
    Slovakia: { postalCode: "811 03", iso2: "SK" },
    Slovenia: { postalCode: "1000", iso2: "SI" },
    "South Africa": { postalCode: "8001", iso2: "ZA" },
    "South Korea": { postalCode: "03186", iso2: "KR" },
    Spain: { postalCode: "28001", iso2: "ES" },
    "Sri Lanka": { postalCode: "00100", iso2: "LK" },
    Sweden: { postalCode: "111 52", iso2: "SE" },
    Switzerland: { postalCode: "8001", iso2: "CH" },
    Taiwan: { postalCode: "100", iso2: "TW" },
    Tajikistan: { postalCode: "734003", iso2: "TJ" },
    Thailand: { postalCode: "10110", iso2: "TH" },
    Tunisia: { postalCode: "1001", iso2: "TN" },
    Turkey: { postalCode: "06050", iso2: "TR" },
    "United Arab Emirates": { postalCode: "124166", iso2: "AE" },
    "United Kingdom": { postalCode: "SW1A 1AA", iso2: "GB" },
    "United States": { postalCode: "90210", iso2: "US" },
    Uruguay: { postalCode: "11100", iso2: "UY" },
    Uzbekistan: { postalCode: "100100", iso2: "UZ" },
    "Vatican City": { postalCode: "00120", iso2: "VA" },
    Venezuela: { postalCode: "1010", iso2: "VE" },
    Vietnam: { postalCode: "10000", iso2: "VN" },
  };

  try {
    const payload = await request.json();
    const { deliverCountry } = payload;

    const countryData = data[deliverCountry];

    if (countryData) {
      const response = await fetch(
        "http://localhost:3000/api/pincodeToAddressDomesticVerify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pincode: countryData.postalCode,
            dual: false,
          }),
        }
      );

      const responseData = await response.json();

      // Existing code
      // Existing code snippet
      if (responseData.success) {
        if (responseData.result[countryData.postalCode]) {
          const filteredResult = responseData.result[
            countryData.postalCode
          ].filter((item) => item.country_code === countryData.iso2);

          // Check if filteredResult has any items
          if (filteredResult.length > 0) {
            const firstLocation = filteredResult[0]; // Get the first location
            const { latitude, longitude } = firstLocation;
            if (latitude != null && longitude != null) {
              return NextResponse.json({
                success: true,
                data: { latitude, longitude },
              });
            }
          } else {
            console.log("No result found");
            return NextResponse.json({ success: false, data: {} });
          }
        } else {
          console.log("No result found");
          return NextResponse.json({ success: false, data: {} }); // or handle no result case
        }
      } else {
        console.log("No result found");
        return NextResponse.json({ success: false, data: {} }); // or handle no result case
      }
    } else {
      return NextResponse.json({ success: false, error: "Failed to fetch" });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({
      success: false,
      error: "Internal server error",
    });
  }
}
