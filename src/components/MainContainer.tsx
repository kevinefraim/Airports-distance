/* Main container component - contains map and form components */
/* fetchDirections function sets the directions and pass it to the Map component */
/* Using google.maps.TravelMode.DRIVING beeing the best options that I found,
check this in: https://developers.google.com/maps/documentation/javascript/directions#TravelModes  */

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
  };

  useEffect(() => {
    if (errors) {
      setTimeout(() => {
        setErrors(false);
      }, 5000);
    }
  }, [errors]);

  return (
    <Paper
      className="w-[90%] mt-4 h-[100%] p-5 flex items-center flex-col gap-5 bg-transparent"
      sx={{
        backgroundColor: "transparent",
      }}
      elevation={8}
    >
      {errors && (
        <span className="text-white bg-red-500 p-1 rounded-md">
          Choose a valid Airport
        </span>
      )}
      <Box className="flex flex-col gap-8 h-[70vh] w-full justify-center">
        <AirportsForm
          setFirstAirport={setFirstAirport}
          setSecondAirport={setSecondAirport}
          mapRef={mapRef}
          fetchDirections={fetchDirections}
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
