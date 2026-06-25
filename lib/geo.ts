import { defaultDialCode, dialCodeByIso, type DialCode } from "@/data/dialCodes";

/**
 * Maps common IANA timezones to ISO 3166-1 alpha-2 country codes. Used purely
 * to pick a sensible DEFAULT dial code from where the visitor's browser is set
 * (e.g. Asia/Dubai -> AE, Asia/Kolkata -> IN). This is best-effort and entirely
 * client-side: no IP lookup, nothing leaves the browser. The user can always
 * change the selection. Unknown zones fall back to the default (UAE).
 */
const TIMEZONE_TO_ISO: Record<string, string> = {
  // Gulf / Middle East
  "Asia/Dubai": "AE",
  "Asia/Riyadh": "SA",
  "Asia/Qatar": "QA",
  "Asia/Kuwait": "KW",
  "Asia/Bahrain": "BH",
  "Asia/Muscat": "OM",
  "Asia/Baghdad": "IQ",
  "Asia/Tehran": "IR",
  "Asia/Jerusalem": "IL",
  "Asia/Beirut": "LB",
  "Asia/Amman": "JO",
  "Asia/Damascus": "SY",
  "Asia/Gaza": "PS",
  "Asia/Hebron": "PS",
  "Asia/Aden": "YE",
  // South & Central Asia
  "Asia/Kabul": "AF",
  "Asia/Karachi": "PK",
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Colombo": "LK",
  "Asia/Dhaka": "BD",
  "Asia/Kathmandu": "NP",
  "Asia/Thimphu": "BT",
  "Asia/Tashkent": "UZ",
  "Asia/Almaty": "KZ",
  "Asia/Bishkek": "KG",
  "Asia/Dushanbe": "TJ",
  "Asia/Ashgabat": "TM",
  "Asia/Baku": "AZ",
  "Asia/Yerevan": "AM",
  "Asia/Tbilisi": "GE",
  // Southeast & East Asia
  "Asia/Bangkok": "TH",
  "Asia/Ho_Chi_Minh": "VN",
  "Asia/Saigon": "VN",
  "Asia/Phnom_Penh": "KH",
  "Asia/Vientiane": "LA",
  "Asia/Yangon": "MM",
  "Asia/Jakarta": "ID",
  "Asia/Makassar": "ID",
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Singapore": "SG",
  "Asia/Manila": "PH",
  "Asia/Brunei": "BN",
  "Asia/Hong_Kong": "HK",
  "Asia/Macau": "MO",
  "Asia/Taipei": "TW",
  "Asia/Shanghai": "CN",
  "Asia/Tokyo": "JP",
  "Asia/Seoul": "KR",
  "Asia/Pyongyang": "KP",
  "Asia/Ulaanbaatar": "MN",
  // Europe
  "Europe/London": "GB",
  "Europe/Dublin": "IE",
  "Europe/Lisbon": "PT",
  "Europe/Madrid": "ES",
  "Europe/Paris": "FR",
  "Europe/Brussels": "BE",
  "Europe/Amsterdam": "NL",
  "Europe/Berlin": "DE",
  "Europe/Zurich": "CH",
  "Europe/Vienna": "AT",
  "Europe/Rome": "IT",
  "Europe/Vatican": "VA",
  "Europe/Malta": "MT",
  "Europe/Copenhagen": "DK",
  "Europe/Oslo": "NO",
  "Europe/Stockholm": "SE",
  "Europe/Helsinki": "FI",
  "Europe/Warsaw": "PL",
  "Europe/Prague": "CZ",
  "Europe/Bratislava": "SK",
  "Europe/Budapest": "HU",
  "Europe/Bucharest": "RO",
  "Europe/Sofia": "BG",
  "Europe/Athens": "GR",
  "Europe/Zagreb": "HR",
  "Europe/Ljubljana": "SI",
  "Europe/Belgrade": "RS",
  "Europe/Sarajevo": "BA",
  "Europe/Skopje": "MK",
  "Europe/Podgorica": "ME",
  "Europe/Tirane": "AL",
  "Europe/Chisinau": "MD",
  "Europe/Kiev": "UA",
  "Europe/Kyiv": "UA",
  "Europe/Minsk": "BY",
  "Europe/Moscow": "RU",
  "Europe/Istanbul": "TR",
  "Europe/Nicosia": "CY",
  "Asia/Nicosia": "CY",
  "Europe/Reykjavik": "IS",
  "Europe/Luxembourg": "LU",
  "Europe/Monaco": "MC",
  "Europe/Andorra": "AD",
  "Europe/San_Marino": "SM",
  "Europe/Vaduz": "LI",
  // Africa
  "Africa/Cairo": "EG",
  "Africa/Casablanca": "MA",
  "Africa/Algiers": "DZ",
  "Africa/Tunis": "TN",
  "Africa/Tripoli": "LY",
  "Africa/Khartoum": "SD",
  "Africa/Lagos": "NG",
  "Africa/Accra": "GH",
  "Africa/Abidjan": "CI",
  "Africa/Dakar": "SN",
  "Africa/Nairobi": "KE",
  "Africa/Dar_es_Salaam": "TZ",
  "Africa/Kampala": "UG",
  "Africa/Addis_Ababa": "ET",
  "Africa/Kigali": "RW",
  "Africa/Johannesburg": "ZA",
  "Africa/Harare": "ZW",
  "Africa/Lusaka": "ZM",
  "Africa/Maputo": "MZ",
  "Africa/Luanda": "AO",
  "Africa/Kinshasa": "CD",
  "Africa/Douala": "CM",
  "Africa/Windhoek": "NA",
  "Africa/Gaborone": "BW",
  "Indian/Mauritius": "MU",
  // North & Central America
  "America/New_York": "US",
  "America/Detroit": "US",
  "America/Chicago": "US",
  "America/Denver": "US",
  "America/Phoenix": "US",
  "America/Los_Angeles": "US",
  "America/Anchorage": "US",
  "Pacific/Honolulu": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Edmonton": "CA",
  "America/Winnipeg": "CA",
  "America/Halifax": "CA",
  "America/Mexico_City": "MX",
  "America/Tijuana": "MX",
  "America/Monterrey": "MX",
  "America/Guatemala": "GT",
  "America/El_Salvador": "SV",
  "America/Tegucigalpa": "HN",
  "America/Managua": "NI",
  "America/Costa_Rica": "CR",
  "America/Panama": "PA",
  "America/Havana": "CU",
  "America/Santo_Domingo": "DO",
  "America/Puerto_Rico": "PR",
  "America/Port_of_Spain": "TT",
  "America/Jamaica": "JM",
  // South America
  "America/Bogota": "CO",
  "America/Lima": "PE",
  "America/Caracas": "VE",
  "America/La_Paz": "BO",
  "America/Santiago": "CL",
  "America/Argentina/Buenos_Aires": "AR",
  "America/Asuncion": "PY",
  "America/Montevideo": "UY",
  "America/Sao_Paulo": "BR",
  "America/Bahia": "BR",
  "America/Manaus": "BR",
  "America/Guayaquil": "EC",
  "America/Paramaribo": "SR",
  "America/Guyana": "GY",
  // Oceania
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Perth": "AU",
  "Australia/Adelaide": "AU",
  "Pacific/Auckland": "NZ",
  "Pacific/Fiji": "FJ",
  "Pacific/Port_Moresby": "PG",
  "Pacific/Guam": "GU",
};

/** Detects the visitor's ISO country from their browser timezone, if known. */
export function detectIsoFromTimezone(): string | null {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!tz) return null;
    return TIMEZONE_TO_ISO[tz] ?? null;
  } catch {
    return null;
  }
}

/**
 * Best-effort default dial code for the visitor's location. Falls back to the
 * configured default (UAE) when the timezone is unknown or unavailable.
 */
export function detectDefaultDialCode(): DialCode {
  const iso = detectIsoFromTimezone();
  if (iso) {
    const match = dialCodeByIso(iso);
    if (match) return match;
  }
  return defaultDialCode;
}
