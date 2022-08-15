import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { AppContextType } from "../types/context";
import { initMap } from "../utils/maps";

const Map = () => {
  const { airports, setOrigin, origin, destiny, setDestiny } = useContext(
    AppContext
  ) as AppContextType;

  useEffect(() => {
    initMap(origin?.geoCode);
  }, [origin, destiny]);
  return <div id="map" className="h-[100%] w-[100%]"></div>;
};

export default Map;
