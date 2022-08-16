import { useEffect, useRef, useState } from "react";
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
  const [errors, setErrors] = useState<boolean>(false);
  const [isResetEnabled, setIsResetEnabled] = useState<boolean>(false);
  const mapRef = useRef<GoogleMap>();

  const fetchDirections = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!firstAirport || !secondAirport) return setErrors(true);
    if (!firstAirport) return setErrors(true);
    if (!secondAirport) return setErrors(true);

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
    setIsResetEnabled(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setErrors(false);
    }, 6000);
  }, [errors]);

  const handleReset = (): void => {
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
      {errors && <span className="text-red-600">Choose a valid Airport</span>}
      <Box className="flex flex-col gap-8 h-[70vh] w-full justify-center">
        <AirportsForm
          setFirstAirport={setFirstAirport}
          setSecondAirport={setSecondAirport}
          mapRef={mapRef}
          fetchDirections={fetchDirections}
          handleReset={handleReset}
          directions={directions}
          isResetEnabled={isResetEnabled}
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
