import React, { ReactNode, useState } from "react";

export const AirportsContext = React.createContext({});

type AirportsProviderProps = {
  children: ReactNode;
};

const AirportsProvider = ({ children }: AirportsProviderProps) => {
  // TODO: implement type based on API response
  const [airports, setAirports] = useState<any | null>(null);

  return (
    <AirportsContext.Provider
      value={{
        airports,
        setAirports,
      }}
    >
      {children}
    </AirportsContext.Provider>
  );
};

export default AirportsProvider;
