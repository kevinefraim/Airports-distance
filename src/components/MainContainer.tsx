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
    service.route(
      {
        origin: firstAirport,
        destination: secondAirport,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <Paper
      sx={{
        width: "90%",
        marginTop: "15px",
        height: "100%",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
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
