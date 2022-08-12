import { Dispatch, SetStateAction } from "react";

export type AirportsContextType = {
  airports: any | null;
  setAirports: Dispatch<SetStateAction<any | null>>;
};
