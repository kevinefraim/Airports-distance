import { Dispatch, SetStateAction } from "react";

export type ContextType = {
  airports: any | null;
  setAirports: Dispatch<SetStateAction<any | null>>;
  loading: boolean;
};
