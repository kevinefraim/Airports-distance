import { Dispatch, SetStateAction } from "react";
import { AirportType } from "./airports";

export type AppContextType = {
  airports: AirportType[] | null | undefined;
  setAirports: Dispatch<SetStateAction<AirportType[] | null | undefined>>;
  loading: boolean;
  origin: AirportType | null | undefined;
  setOrigin: Dispatch<SetStateAction<AirportType | null | undefined>>;
  destiny: AirportType | null | undefined;
  setDestiny: Dispatch<SetStateAction<AirportType | null | undefined>>;
};
