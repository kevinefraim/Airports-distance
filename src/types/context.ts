import { Dispatch, SetStateAction } from "react";

export type AppContextType = {
  airports: any | null;
  setAirports: Dispatch<SetStateAction<any | null>>;
  loading: boolean;
};
