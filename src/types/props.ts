import { DirectionsResult, LatLngLiteral } from "./maps";

export type AirportsFormProps = {
  setFirstAirport: (position: LatLngLiteral) => void;
  setSecondAirport: (position: LatLngLiteral) => void;
  mapRef: any;
  fetchDirections: (e: any) => void;
  handleReset: () => void;
  directions: DirectionsResult | null;
  isResetEnabled: boolean;
};

export type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export type MapProps = {
  firstAirport: LatLngLiteral | null;
  secondAirport: LatLngLiteral | null;
  mapRef: any;
  directions: DirectionsResult | null;
};

export type AirportInputProps = {
  setAirport: (position: LatLngLiteral) => void;
};
