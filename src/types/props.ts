/* Component props types file */

import { DirectionsResult, LatLngLiteral } from "./maps";

export type AirportsFormProps = {
  setFirstAirport: (position: LatLngLiteral | null) => void;
  setSecondAirport: (position: LatLngLiteral | null) => void;
  mapRef: any;
  fetchDirections: (e: React.ChangeEvent<HTMLFormElement>) => void;
  directions: DirectionsResult | null;
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
