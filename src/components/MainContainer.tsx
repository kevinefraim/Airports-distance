import { useRef, useState } from "react";
import { DirectionsResult, LatLngLiteral } from "types/maps";

import { Box, Paper } from "@mui/material";
import { GoogleMap } from "@react-google-maps/api";

import AirportsForm from "./AirportsForm";
import Map from "./Map";

const MainContainer = () => {
  const [firstAirport, setFirstAirport] = useState<LatLngLiteral | null>(null);
  const [secondAirport, setSecondAirport] = useState<LatLngLiteral | null>(
    null
  );
  const [directions, setDirections] = useState<DirectionsResult | null>(null);
  const mapRef = useRef<GoogleMap>();

  const fetchDirections = () => {
    if (!firstAirport || !secondAirport) return;
    const service: google.maps.DirectionsService =
      new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: firstAirport,
      destination: secondAirport,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    service.route(
      request,
      (res, status) => status === "OK" && setDirections(res)
    );
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Paper
      className="w-[90%] mt-4 h-[100%] p-5 flex items-center flex-col gap-5 bg-transparent"
      sx={{
        backgroundColor: "transparent",
      }}
      elevation={8}
    >
      <Box className="flex flex-col gap-8 h-[70vh] w-full justify-center">
        <AirportsForm
          setFirstAirport={setFirstAirport}
          setSecondAirport={setSecondAirport}
          mapRef={mapRef}
          fetchDirections={fetchDirections}
          handleReset={handleReset}
          directions={directions}
        />
        <Box className="h-[100%] w-[100%] flex justify-center">
          <Map
            firstAirport={firstAirport}
            secondAirport={secondAirport}
            mapRef={mapRef}
            directions={directions}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default MainContainer;
