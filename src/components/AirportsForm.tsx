import { LatLngLiteral } from "types/maps";
import { AirportsFormProps } from "types/props";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

import Distance from "./Distance";
import Places from "./Places";

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
      <Places
        setAirport={(position: LatLngLiteral) => {
          setFirstAirport(position);
          mapRef.current?.panTo(position);
        }}
      />
      <Places
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
