import { LatLngLiteral } from "types/maps";
import { AirportsFormProps } from "types/props";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import AirportInput from "./AirportInput";
import Distance from "./Distance";

const AirportsForm = ({
  setFirstAirport,
  setSecondAirport,
  mapRef,
  fetchDirections,
  handleReset,
  directions,
}: AirportsFormProps) => {
  return (
    <Box className="flex flex-col md:flex-row md:items-center gap-8  w-full justify-center">
      <AirportInput
        setAirport={(position: LatLngLiteral): void => {
          setFirstAirport(position);
          mapRef.current?.panTo(position);
        }}
      />
      <AirportInput
        setAirport={(position: LatLngLiteral): void => {
          setSecondAirport(position);
          mapRef.current?.panTo(position);
        }}
      />
      <Button
        onClick={fetchDirections}
        variant="contained"
        color="success"
        className="h-fit"
      >
        View Distance
      </Button>
      <Button variant="contained" onClick={handleReset} className="h-fit w-fit">
        Reset
      </Button>
      {directions && <Distance leg={directions.routes[0].legs[0]} />}
    </Box>
  );
};

export default AirportsForm;
