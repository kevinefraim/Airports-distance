import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  airports: any | null;
  setAirports: Dispatch<SetStateAction<any | null>>;
  loading: boolean;
  origin: object | null;
  setOrigin: Dispatch<SetStateAction<object | null>>;
  destiny: object | null;
  setDestiny: Dispatch<SetStateAction<object | null>>;
};
