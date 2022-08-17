/* Component props types file */

import { GoogleMap } from "@react-google-maps/api";
import { DirectionsResult, LatLngLiteral } from "./maps";

export type AirportsFormProps = {
  setFirstAirport: (position: LatLngLiteral | null) => void;
  setSecondAirport: (position: LatLngLiteral | null) => void;
  mapRef: GoogleMap | null;
  fetchDirections: (e: React.ChangeEvent<HTMLFormElement>) => void;
  directions: DirectionsResult | null;
  onUnmount: (map: any) => void;
};

export type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export type MapProps = {
  firstAirport: LatLngLiteral | null;
  secondAirport: LatLngLiteral | null;
  mapRef: GoogleMap | null;
  directions: DirectionsResult | null;
  onUnmount: (map: any) => void;
  setMap: (map: GoogleMap) => void;
};

export type AirportInputProps = {
  setAirport: (position: LatLngLiteral) => void;
};
