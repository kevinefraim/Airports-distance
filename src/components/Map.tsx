import { Wrapper } from "@googlemaps/react-wrapper";
import React, { useEffect, useState } from "react";
import { initMap } from "../utils/maps";

const Map = () => {
  useEffect(() => {
    initMap();
  }, []);
  return <div id="map" className="h-[100%] w-[100%]"></div>;
};

export default Map;
