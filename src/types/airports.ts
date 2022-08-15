type AiportAddress = {
  cityCode: string;
  cityName: string;
  countryCode: string;
  countryName: string;
  regionCode: string;
  stateCode: string;
};

type GeoCode = {
  latitude: number;
  longitude: number;
};

export type AirportType = {
  address: AiportAddress;
  analytics: object;
  detailedName: string;
  geoCode: GeoCode;
  iataCode: string;
  id: string;
  name: string;
  self: object;
  subType: string;
  timeZoneOffset: number;
  type: string;
};
