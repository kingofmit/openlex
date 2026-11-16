/** State ID → full name mapping */
export const JURISDICTIONS: Record<string, string> = {
  us: "United States", al: "Alabama", ak: "Alaska", az: "Arizona", ar: "Arkansas",
  ca: "California", co: "Colorado", ct: "Connecticut", de: "Delaware", fl: "Florida",
  ga: "Georgia", hi: "Hawaii", id: "Idaho", il: "Illinois", in: "Indiana",
  ia: "Iowa", ks: "Kansas", ky: "Kentucky", la: "Louisiana", me: "Maine",
  md: "Maryland", ma: "Massachusetts", mi: "Michigan", mn: "Minnesota", ms: "Mississippi",
  mo: "Missouri", mt: "Montana", ne: "Nebraska", nv: "Nevada", nh: "New Hampshire",
  nj: "New Jersey", nm: "New Mexico", ny: "New York", nc: "North Carolina", nd: "North Dakota",
  oh: "Ohio", ok: "Oklahoma", or: "Oregon", pa: "Pennsylvania", ri: "Rhode Island",
  sc: "South Carolina", sd: "South Dakota", tn: "Tennessee", tx: "Texas", ut: "Utah",
  vt: "Vermont", va: "Virginia", wa: "Washington", wv: "West Virginia", wi: "Wisconsin",
  wy: "Wyoming", dc: "District of Columbia", pr: "Puerto Rico", gu: "Guam",
  vi: "U.S. Virgin Islands", as: "American Samoa", mp: "Northern Mariana Islands",
};

/** FIPS codes for GeoJSON mapping */
export const STATE_FIPS: Record<string, string> = {
  al: "01", ak: "02", az: "04", ar: "05", ca: "06", co: "08", ct: "09",
  de: "10", fl: "12", ga: "13", hi: "15", id: "16", il: "17", in: "18",
  ia: "19", ks: "20", ky: "21", la: "22", me: "23", md: "24", ma: "25",
  mi: "26", mn: "27", ms: "28", mo: "29", mt: "30", ne: "31", nv: "32",
  nh: "33", nj: "34", nm: "35", ny: "36", nc: "37", nd: "38", oh: "39",
  ok: "40", or: "41", pa: "42", ri: "44", sc: "45", sd: "46", tn: "47",
  tx: "48", ut: "49", vt: "50", va: "51", wa: "53", wv: "54", wi: "55",
  wy: "56", dc: "11",
};
