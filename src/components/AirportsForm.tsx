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
    <Box className="flex flex-col md:flex-row gap-8  w-full justify-center">
      <AirportInput
        setAirport={(position: LatLngLiteral) => {
          setFirstAirport(position);
          mapRef.current?.panTo(position);
        }}
      />
      <AirportInput
        setAirport={(position: LatLngLiteral) => {
          setSecondAirport(position);
          mapRef.current?.panTo(position);
        }}
      />
      <Button
        onClick={fetchDirections}
        variant="contained"
        sx={{ height: "fit-content" }}
      >
        View Distance
      </Button>
      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{ height: "fit-content", width: "fit-content" }}
      >
        Reset
      </Button>
      {directions && <Distance leg={directions.routes[0].legs[0]} />}
    </Box>
  );
};

export default AirportsForm;
