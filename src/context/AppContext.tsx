import axios from "axios";
import React, { ReactNode, useEffect, useState } from "react";

export const AppContext = React.createContext({});

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => {
  // TODO: implement type based on API response
  const [airports, setAirports] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getAccessToken = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/security/oauth2/token`,
        `grant_type=client_credentials&client_id=${process.env.REACT_APP_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_API_CLIENT_SECRET}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded",
          },
        }
      );
      return data.access_token;
    } catch (error: any) {
      console.log(error);
    }
  };

  const getUSAirports = async (token: string) => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}/reference-data/locations?subType=AIRPORT&keyword=us&`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAirports(data);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchAirports = async () => {
    const token = await getAccessToken();
    await getUSAirports(token);
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  return (
    <AppContext.Provider
      value={{
        airports,
        setAirports,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
