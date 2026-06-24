export type DialCode = {
  iso: string;
  name: string;
  dialCode: string;
  flag: string;
};

/**
 * Flag emoji + international dial code, keyed by ISO 3166-1 alpha-2.
 * Used by the phone field's country selector. Ordered with UAE first so the
 * default selection sits at the top of the list.
 */
export const dialCodes: DialCode[] = [
  { iso: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { iso: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { iso: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { iso: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼" },
  { iso: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭" },
  { iso: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲" },
  { iso: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { iso: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { iso: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { iso: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { iso: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { iso: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { iso: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
  { iso: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
  { iso: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { iso: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { iso: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { iso: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { iso: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { iso: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { iso: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { iso: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰" },
  { iso: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { iso: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { iso: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { iso: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { iso: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { iso: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { iso: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { iso: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { iso: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
  { iso: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴" },
  { iso: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱" },
  { iso: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { iso: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { iso: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { iso: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { iso: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { iso: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪" },
  { iso: "GH", name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  { iso: "MA", name: "Morocco", dialCode: "+212", flag: "🇲🇦" },
  { iso: "JO", name: "Jordan", dialCode: "+962", flag: "🇯🇴" },
  { iso: "LB", name: "Lebanon", dialCode: "+961", flag: "🇱🇧" },
  { iso: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { iso: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { iso: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷" },
  { iso: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
];

export const defaultDialCode =
  dialCodes.find((c) => c.iso === "AE") ?? dialCodes[0];
