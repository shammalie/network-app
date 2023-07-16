export interface IpData {
  id: string | undefined | null;
  ip: string | undefined | null;
  city: string | undefined | null;
  region: string | undefined | null;
  regionCode: string | undefined | null;
  countryCode: string | undefined | null;
  countryCodeIso3: string | undefined | null;
  countryName: string | undefined | null;
  countryCapital: string | undefined | null;
  countryTld: string | undefined | null;
  continentCode: string | undefined | null;
  inEu: boolean | undefined | null;
  postal: string | undefined | null;
  latitude: number | undefined | null;
  longitude: number | undefined | null;
  timezone: string | undefined | null;
  utcOffset: string | undefined | null;
  countryCallingCode: string | undefined | null;
  currency: string | undefined | null;
  currencyName: string | undefined | null;
  languages: string | undefined | null;
  asn: string | undefined | null;
  org: string | undefined | null;
  firstSeen: number | undefined | null;
  lastSeen: number | undefined | null;
  error: boolean | undefined | null;
  reason: string | undefined | null;
  message: string | undefined | null;
}

export type IpDataCollection = IpData[];
